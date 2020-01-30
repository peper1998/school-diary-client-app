import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HomeComponent } from './_compnents/home/home.component';
import { LessonsSheduleComponent } from './_compnents/lessons-shedule/lessons-shedule.component';
import { NotesLogComponent } from './_compnents/notes-log/notes-log/notes-log.component';
import { MyCasesComponent } from './_compnents/my-cases/my-cases/my-cases.component';
import { AuthInterceptor } from './_services/AuthInterceptor';
import { CaseComponent } from './_compnents/case/case.component';
import { AddCaseComponent } from './_compnents/add-case/add-case.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './_compnents/grades/grades.component';
import { GradesBridgeComponent } from './_compnents/grades-bridge/grades-bridge.component';
import { GradesPreviewParentComponent } from './_compnents/grades-preview-parent/grades-preview-parent.component';
import { GradesPreviewStudentComponent } from './_compnents/grades-preview-student/grades-preview-student/grades-preview-student.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LessonsSheduleComponent,
    NotesLogComponent,
    MyCasesComponent,
    CaseComponent,
    AddCaseComponent,
    GradesComponent,
    GradesBridgeComponent,
    GradesPreviewParentComponent,
    GradesPreviewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  schemas:[NO_ERRORS_SCHEMA], 
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})



export class AppModule { }
