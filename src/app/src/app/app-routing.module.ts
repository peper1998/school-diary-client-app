import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_compnents/home/home.component';
import { LessonsSheduleComponent } from './_compnents/lessons-shedule/lessons-shedule.component';
import { NotesLogComponent } from './_compnents/notes-log/notes-log/notes-log.component';
import { MyCasesComponent } from './_compnents/my-cases/my-cases/my-cases.component';
import { LoginComponent } from './login/login.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GradesComponent } from './_compnents/grades/grades.component';
import { GradesBridgeComponent } from './_compnents/grades-bridge/grades-bridge.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
                        {path: 'lessons-shedule', component: LessonsSheduleComponent},
                        {path: 'notes-log', component: NotesLogComponent},
                        {path:'my-cases',component:MyCasesComponent},
                        {path:'grades',component:GradesBridgeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgMultiSelectDropDownModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
