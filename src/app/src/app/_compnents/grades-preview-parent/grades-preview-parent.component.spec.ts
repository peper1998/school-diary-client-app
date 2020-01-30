import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesPreviewParentComponent } from './grades-preview-parent.component';

describe('GradesPreviewParentComponent', () => {
  let component: GradesPreviewParentComponent;
  let fixture: ComponentFixture<GradesPreviewParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesPreviewParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesPreviewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
