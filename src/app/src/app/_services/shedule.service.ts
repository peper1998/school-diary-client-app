import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SheduleModel } from '../_models/SheduleModel';


@Injectable({ providedIn: 'root' })
export class SheduleService {

    constructor(private http: HttpClient){ }

    public getShedule():Observable<SheduleModel[]>{
        return this.http.get<SheduleModel[]>('https://school-diary-api.herokuapp.com/school-diary-api/schedules/special');
    }
}