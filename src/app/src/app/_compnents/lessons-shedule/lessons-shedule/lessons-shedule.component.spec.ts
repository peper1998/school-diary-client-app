import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsSheduleComponent } from './lessons-shedule.component';

describe('LessonsSheduleComponent', () => {
  let component: LessonsSheduleComponent;
  let fixture: ComponentFixture<LessonsSheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsSheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
