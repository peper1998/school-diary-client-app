import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/Student';
import { GradesService } from 'src/app/_services/grades.service';
import { UsersService } from 'src/app/_services/users.service';
import { GradePreview } from 'src/app/_models/GradePreview';
import { SubjectModel } from 'src/app/_models/SubjectModel';

@Component({
  selector: 'app-grades-preview-student',
  templateUrl: './grades-preview-student.component.html',
  styleUrls: ['./grades-preview-student.component.scss']
})
export class GradesPreviewStudentComponent implements OnInit {

  studentDetails: Student;
  isDataLoaded = false;
  grades: GradePreview[];
  subjects: SubjectModel[];
  subjectIdx: number = 0;

  constructor(private gradesService: GradesService, private usersService: UsersService) { }

  loadGrades() {
    this.gradesService.getGrades(this.subjects[this.subjectIdx].id).subscribe(y=>{
      this.grades = y;
      this.isDataLoaded = true;
      });
  }

  nextSubject() {
    this.subjectIdx = (this.subjectIdx + 1) % this.subjects.length;
    this.loadGrades();
  }

  ngOnInit() {
    this.usersService.getStudentDetails().subscribe(x=>{
      this.studentDetails = x;
      this.gradesService.getSubjects().subscribe(y=>{
        this.subjects = y;
        this.loadGrades();
      });
    });
  }

}
