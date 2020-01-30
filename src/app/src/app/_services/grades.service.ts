import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IssueView } from '../_models/IssueView';
import { AuthenticationService } from '.';
import { TeacherDetails } from '../_models/TeacherDetails';
import { SchoolClass } from '../_models/SchoolClass';
import { GradeColumn } from '../_models/GradeColumn';
import { GradeView } from '../_models/GradeView';
import { GradePost } from '../_models/GradePost';
import { Role } from '../_models/Role';
import { GradePreview } from '../_models/GradePreview';
import { SubjectModel } from '../_models/SubjectModel';

@Injectable({
  providedIn: 'root'
})
export class GradesService {


  constructor(private http: HttpClient) { 

    }

    public getTaughtSchoolClasses() : Observable<SchoolClass[]> {
        return this.http.get<SchoolClass[]>('https://school-diary-api.herokuapp.com/school-diary-api/schoolClasses/teachIn');
    }

    public getGradesColumns(schoolClassId: number) : Observable<GradeColumn[]> {
        return this.http.get<GradeColumn[]>('https://school-diary-api.herokuapp.com/school-diary-api/columns?schoolClassId=' + schoolClassId);
    }

    public addGrade(gradeColumnId: number, studentId: number, value: number) : Observable<GradeView> {
        let gradePost = new GradePost();
        gradePost.studentId = studentId;
        gradePost.gradeColumnId = gradeColumnId;
        gradePost.value = value;
        console.log("test");
        return this.http.post<GradeView>('https://school-diary-api.herokuapp.com/school-diary-api/grades', gradePost);
    }

    public addGradeColumn(name: string, schoolClassId: number) : Observable<GradeColumn> {
        return this.http.post<GradeColumn>('https://school-diary-api.herokuapp.com/school-diary-api/columns', {name, schoolClassId});
    }

    public deleteGrade(gradeId: number) : Observable<any> {
        return this.http.delete<any>('https://school-diary-api.herokuapp.com/school-diary-api/grades/' + gradeId);
    }

    public deleteGradeColumn(gradeColumnId: number) : Observable<any> {
        return this.http.delete<any>('https://school-diary-api.herokuapp.com/school-diary-api/columns/' + gradeColumnId);
    }

    public getGrades(subjectId: number) : Observable<GradePreview[]> {
        return this.http.get<GradePreview[]>('https://school-diary-api.herokuapp.com/school-diary-api/grades/?subjectId=' + subjectId);
    }

    public getSubjects() : Observable<SubjectModel[]> {
        return this.http.get<SubjectModel[]>('https://school-diary-api.herokuapp.com/school-diary-api/subjects');
    }
  
}

