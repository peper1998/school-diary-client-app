import { Component, OnInit } from '@angular/core';
import { CasesService } from 'src/app/_services/cases.service';
import { User } from 'src/app/_models';
import { IssueView } from 'src/app/_models/IssueView';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-my-cases',
  templateUrl: './my-cases.component.html',
  styleUrls: ['./my-cases.component.scss']
})
export class MyCasesComponent implements OnInit {

  listOfUsers: User[];
  listOfCases: IssueView[];

  constructor(private casesService:CasesService,
      private authService:AuthenticationService) { }

  ngOnInit() {
      this.casesService.getUsers().subscribe(x=>{
        this.listOfUsers=x;
        console.log(this.listOfUsers);
      })

      this.casesService.getCases().subscribe(x=>{
        this.listOfCases = x;
        console.log(this.listOfCases);
      })
      // this.authService.currentUser.subscribe(x=>{
      //   this.listOfCases=this.listOfCases.filter(mem=>mem.membersIds.lastIndexOf(x.id)>-1);
      // });
      
      
  }

}
