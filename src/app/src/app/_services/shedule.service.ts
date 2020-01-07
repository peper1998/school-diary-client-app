import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SheduleModel } from '../_models/SheduleModel';
import { Time } from "@angular/common";


@Injectable({ providedIn: 'root' })
export class SheduleService {

    public getShedule():SheduleModel[]{
        let shedule=new Array<SheduleModel>();
        var time1:Date = new Date();
        time1.setHours(7);
        time1.setMinutes(0);
        var time2:Date= new Date();
        time2.setHours(7);
        time2.setMinutes(0);
        shedule.push(new SheduleModel(0,0,0,0,1,time1,time2));
        shedule.push(new SheduleModel(0,0,0,0,2,time1,time2));
        shedule.push(new SheduleModel(0,0,0,0,3,time1,time2));
        return shedule;
    }

}