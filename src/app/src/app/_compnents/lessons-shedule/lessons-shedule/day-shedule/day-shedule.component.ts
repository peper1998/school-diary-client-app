import { Component, OnInit, Input } from '@angular/core';
import { SheduleModel } from 'src/app/_models/SheduleModel';

@Component({
  selector: 'app-day-shedule',
  templateUrl: './day-shedule.component.html',
  styleUrls: ['./day-shedule.component.scss']
})
export class DaySheduleComponent implements OnInit {

  @Input() shedule:Array<SheduleModel>;
  
  constructor() { }

  ngOnInit() {
  }

}
