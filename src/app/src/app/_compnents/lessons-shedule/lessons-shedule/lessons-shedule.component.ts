import { Input } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { SheduleService } from 'src/app/_services/shedule.service';
import { SheduleModel } from 'src/app/_models/SheduleModel';
@Component({
  selector: 'app-lessons-shedule',
  templateUrl: './lessons-shedule.component.html',
  styleUrls: ['./lessons-shedule.component.scss']
})
export class LessonsSheduleComponent implements OnInit {
  shedule = new Array<SheduleModel>();
  days= new Array<Array<SheduleModel>>(5);
  constructor(private sheduleService: SheduleService) { }
  ngOnInit() {
    this.days = new Array<Array<SheduleModel>>(5);
    this.days.forEach(x => { x = new Array<SheduleModel>(); });
    this.shedule = this.sheduleService.getShedule();
    this.shedule.forEach(x => {
      this.days[x.day - 1].push(x);
    });
  }
}

