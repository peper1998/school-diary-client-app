import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HomeComponent } from './_compnents/home/home.component';
import { LessonsSheduleComponent } from './_compnents/lessons-shedule/lessons-shedule/lessons-shedule.component';
import { NotesLogComponent } from './_compnents/notes-log/notes-log/notes-log.component';
import { MyCasesComponent } from './_compnents/my-cases/my-cases/my-cases.component';
import { DaySheduleComponent } from './_compnents/lessons-shedule/lessons-shedule/day-shedule/day-shedule.component';
import { SheduleElementComponent } from './_compnents/lessons-shedule/shedule-element/shedule-element.component';
import { AuthInterceptor } from './_services/AuthInterceptor';
import { CaseComponent } from './_compnents/case/case.component';




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
    CaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})



export class AppModule { }
