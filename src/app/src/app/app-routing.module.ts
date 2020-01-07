import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_compnents/home/home.component';
import { LessonsSheduleComponent } from './_compnents/lessons-shedule/lessons-shedule/lessons-shedule.component';
import { NotesLogComponent } from './_compnents/notes-log/notes-log/notes-log.component';
import { MyCasesComponent } from './_compnents/my-cases/my-cases/my-cases.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
                        {path: 'my-lessons-shedule', component: LessonsSheduleComponent},
                        {path: 'notes-log', component: NotesLogComponent},
                        {path:'my-cases',component:MyCasesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
