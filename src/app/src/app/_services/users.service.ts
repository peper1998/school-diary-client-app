import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherDetails } from '../_models/TeacherDetails';
import { Role } from '../_models/Role';
import { ParentDetails } from '../_models/ParentDetails';
import { Student } from '../_models/Student';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { 

    }

    public getTeacherDetails() : Observable<TeacherDetails> {
        return this.http.get<TeacherDetails>('https://school-diary-api.herokuapp.com/school-diary-api/teachers/details');
    }

    public getParentDetails() : Observable<ParentDetails> {
        return this.http.get<ParentDetails>('https://school-diary-api.herokuapp.com/school-diary-api/parents/details');
    }

    public getStudentDetails() : Observable<Student> {
      return this.http.get<Student>('https://school-diary-api.herokuapp.com/school-diary-api/students/details');
    }

    public getRoles() : Observable<Role[]> {
        return this.http.get<Role[]>('https://school-diary-api.herokuapp.com/school-diary-api/roles');
    }
  
}

