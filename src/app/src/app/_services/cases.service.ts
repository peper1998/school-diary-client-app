import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IssueView } from '../_models/IssueView';
import { AuthenticationService } from '.';

@Injectable({
  providedIn: 'root'
})
export class CasesService {


  constructor(private http: HttpClient) { 

    }
  
  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://school-diary-api.herokuapp.com/school-diary-api/users/active');
  }

  public getCases(): Observable<IssueView[]>{
    return this.http.get<IssueView[]>('https://school-diary-api.herokuapp.com/school-diary-api/issues');
  }

  public addCase(topic:string,memberIds:number[]):Observable<any>{
    var model = new IssuePostModel();
    model.topic=topic;
    model.membersIds  =memberIds ;
    return  this.http.post<IssuePostModel>('https://school-diary-api.herokuapp.com/school-diary-api/issues',model);
  }

}

export class IssuePostModel{
  topic:string;
  membersIds:number[];
}