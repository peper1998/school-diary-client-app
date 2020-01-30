import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesPreviewStudentComponent } from './grades-preview-student.component';

describe('GradesPreviewStudentComponent', () => {
  let component: GradesPreviewStudentComponent;
  let fixture: ComponentFixture<GradesPreviewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesPreviewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesPreviewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
