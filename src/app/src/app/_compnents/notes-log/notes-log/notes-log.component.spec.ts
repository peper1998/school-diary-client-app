import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesLogComponent } from './notes-log.component';

describe('NotesLogComponent', () => {
  let component: NotesLogComponent;
  let fixture: ComponentFixture<NotesLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
