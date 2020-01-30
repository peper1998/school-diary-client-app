import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';
import { GradesService } from 'src/app/_services/grades.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-grades-bridge',
  templateUrl: './grades-bridge.component.html',
  styleUrls: ['./grades-bridge.component.scss']
})
export class GradesBridgeComponent implements OnInit {

  userRoleName: string = "";

  constructor(private http: HttpClient, private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getRoles().subscribe(x=>{
      this.http.get<User>('https://school-diary-api.herokuapp.com/school-diary-api/users/details')
      .subscribe(user => {
        this.userRoleName = x.find(role=>role.id==user.roleId).name;
        console.log(this.userRoleName);
      });
        
      
    });
  }

}
