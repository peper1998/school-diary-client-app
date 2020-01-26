import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HomeComponent } from './_compnents/home/home.component';
import { LessonsSheduleComponent } from './_compnents/lessons-shedule/lessons-shedule/lessons-shedule.component';
import { NotesLogComponent } from './_compnents/notes-log/notes-log/notes-log.component';
import { MyCasesComponent } from './_compnents/my-cases/my-cases/my-cases.component';
import { DaySheduleComponent } from './_compnents/lessons-shedule/lessons-shedule/day-shedule/day-shedule.component';
import { SheduleElementComponent } from './_compnents/lessons-shedule/shedule-element/shedule-element.component';
import { AuthInterceptor } from './_services/AuthInterceptor';
import { CaseComponent } from './_compnents/case/case.component';
import { AddCaseComponent } from './_compnents/add-case/add-case.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LessonsSheduleComponent,
    NotesLogComponent,
    MyCasesComponent,
    DaySheduleComponent,
    SheduleElementComponent,
    CaseComponent,
    AddCaseComponent
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
