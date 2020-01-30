import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesBridgeComponent } from './grades-bridge.component';

describe('GradesBridgeComponent', () => {
  let component: GradesBridgeComponent;
  let fixture: ComponentFixture<GradesBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
