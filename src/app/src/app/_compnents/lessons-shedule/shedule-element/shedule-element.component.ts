import { Component, OnInit, Input } from '@angular/core';
import { SheduleModel } from 'src/app/_models/SheduleModel';

@Component({
  selector: 'app-shedule-element',
  templateUrl: './shedule-element.component.html',
  styleUrls: ['./shedule-element.component.scss']
})
export class SheduleElementComponent implements OnInit {

  @Input() lesson: SheduleModel;

  constructor() { }

  ngOnInit() {
  }

}
