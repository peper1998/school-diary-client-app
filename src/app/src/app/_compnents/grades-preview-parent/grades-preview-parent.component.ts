import { Component, OnInit } from '@angular/core';
import { GradesService } from 'src/app/_services/grades.service';
import { SubjectModel } from 'src/app/_models/SubjectModel';
import { GradePreview } from 'src/app/_models/GradePreview';
import { ParentDetails } from 'src/app/_models/ParentDetails';
import { UsersService } from 'src/app/_services/users.service';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-grades-preview-parent',
  templateUrl: './grades-preview-parent.component.html',
  styleUrls: ['./grades-preview-parent.component.scss']
})
export class GradesPreviewParentComponent implements OnInit {

  parentDetails: ParentDetails;
  subjects: SubjectModel[];
  grades: GradePreview[];
  isDataLoaded: boolean = false;
  childIdx: number = 0;
  subjectIdx: number = 0;

  constructor(private gradesService: GradesService, private usersService: UsersService) { }

  loadGrades() {
    this.gradesService.getGrades(this.subjects[this.subjectIdx].id).subscribe(y=>{
      this.grades = y.filter(q=>q.studentId == this.parentDetails.children[this.childIdx].details.id);
      this.isDataLoaded = true;
      });
  }

  nextSubject() {
    this.subjectIdx = (this.subjectIdx + 1) % this.subjects.length;
    this.loadGrades();
  }

  nextChild() {
    this.childIdx = (this.childIdx + 1) % this.parentDetails.children.length;
    this.loadGrades();
  }

  ngOnInit() {
    this.usersService.getParentDetails().subscribe(a=>{
      this.parentDetails = a;
      this.gradesService.getSubjects().subscribe(x=>{
        this.subjects = x;
        this.loadGrades();
      });
    });
  }

}
