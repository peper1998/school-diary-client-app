import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IssueView } from '../_models/IssueView';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(private http: HttpClient) { }
  
  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://school-diary-api.herokuapp.com/school-diary-api/users/active');
  }

  public getCases(): Observable<IssueView[]>{
    return this.http.get<IssueView[]>('https://school-diary-api.herokuapp.com/school-diary-api/issues');
  }
}
