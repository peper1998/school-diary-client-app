import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  public isUserLoggedIn = false;

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }

}
