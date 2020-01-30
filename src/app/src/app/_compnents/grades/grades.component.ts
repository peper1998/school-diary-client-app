import { Component, OnInit, Input } from '@angular/core';
import { IssueView } from 'src/app/_models/IssueView';
import { IssueInnerIssueMessageView } from 'src/app/_models/IssueInnerIssueView';
import { User } from 'src/app/_models';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CasesService } from 'src/app/_services/cases.service';
import { GradesService } from 'src/app/_services/grades.service';
import { TeacherDetails } from 'src/app/_models/TeacherDetails';
import { SchoolClass } from 'src/app/_models/SchoolClass';
import { GradeColumn } from 'src/app/_models/GradeColumn';
import { Observable, BehaviorSubject } from 'rxjs';
import { GradeView } from 'src/app/_models/GradeView';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  teacherDetails: TeacherDetails;  
  taughtSchoolClasses: SchoolClass[];
  gradesColumns: GradeColumn[];
  grades: GradeView[][] = new Array<Array<GradeView>>();
  schoolClassStudents: User[];
  isDataLoaded = false;
  gradeForm: FormGroup;
  gradeColumnForm: FormGroup;
  selectedStudent: User;
  selectedColumn: GradeColumn;
  selectedStudentIndex: number;
  selectedColumnIndex: number;

  constructor(private fb: FormBuilder,
    private gradesService: GradesService,
    private usersService: UsersService) {

  }

  submitGrade() {
      this.gradesService.addGrade(this.selectedColumn.id, this.selectedStudent.id, this.gradeForm.controls.grade.value).subscribe(x=>{
        this.grades[this.selectedStudentIndex][this.selectedColumnIndex] = x;
        this.gradeForm = null;
        console.log("Submit grade: " + this.gradeForm.controls.grade.value);
      });
    
  }

  submitGradeColumn() {
    this.gradesService.addGradeColumn(this.gradeColumnForm.controls.name.value, this.taughtSchoolClasses[0].id).subscribe(x=>{
        this.gradesColumns.push(x);
        for(let gradeRow of this.grades) {
            gradeRow.push(null);
        }
        this.gradeColumnForm = null;
    });
  }

  addColumn() {
    this.gradeColumnForm = new FormGroup({
        name: new FormControl(),
      });
  }

  deleteGrade(i: number, j: number) {
    this.gradesService.deleteGrade(this.grades[i][j].id).subscribe(x=>{
      this.grades[i][j] = null;
    });
  }

  deleteGradeColumn(i: number) {
    this.gradesService.deleteGradeColumn(this.gradesColumns[i].id).subscribe(x=>{
      for(let gradeRow of this.grades) {
        gradeRow.splice(i, 1);
      }
      
      this.gradesColumns.splice(i, 1);
          
      
    });
  }

  addGrade(i: number, j: number) {
    this.selectedStudentIndex = i;
    this.selectedColumnIndex = j; 
    this.selectedStudent = this.schoolClassStudents[i];
    this.selectedColumn = this.gradesColumns[j];
    this.gradeForm = new FormGroup({
        grade: new FormControl(),
      });
     
  } 

  ngOnInit() {
      
        this.usersService.getTeacherDetails().subscribe(x=>{
          this.teacherDetails = x;
        });

        this.gradesService.getTaughtSchoolClasses().subscribe(x=>{
            this.taughtSchoolClasses = x;
        }).add(x=>{
            this.schoolClassStudents = this.taughtSchoolClasses[0].students;
           //TODO selecting schoolClass
        this.gradesService.getGradesColumns(this.taughtSchoolClasses[0].id).subscribe(y=>{
            this.gradesColumns = y;
            let i = 0;
            this.schoolClassStudents.forEach(student=>{
                this.grades.push(new Array<GradeView>());
                
                this.gradesColumns.forEach(column=>{
                    let gradeView = column.grades.find(grade=>grade.studentId==student.id);
                    this.grades[i].push(gradeView);
                    
                });
                i++;
            })
            this.isDataLoaded = true;
            });
             
        }); 
        
        


  }

}
