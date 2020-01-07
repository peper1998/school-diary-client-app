import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleElementComponent } from './shedule-element.component';

describe('SheduleElementComponent', () => {
  let component: SheduleElementComponent;
  let fixture: ComponentFixture<SheduleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
