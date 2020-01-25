import { Component, OnInit, Input } from '@angular/core';
import { IssueView } from 'src/app/_models/IssueView';
import { IssueInnerIssueMessageView } from 'src/app/_models/IssueInnerIssueView';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  @Input() case: IssueView;
  @Input() users: User[];

  usersForMessages:string[];
  messagesList: IssueInnerIssueMessageView[];
  isOpened = false;

  constructor() {

  }

  open(){
    this.messagesList = this.case.messageViews;
    this.usersForMessages=[];
    this.messagesList.forEach(x=>{this.usersForMessages.push(this.users.find(user=>user.id==x.authorId).surname)})
    this.isOpened = true;

  }

  ngOnInit() {
  }

}
