import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    
   }

  public isUserLoggedIn = false;

  userLoggedIn(logged: boolean) {
    this.isUserLoggedIn = logged;
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }

}
