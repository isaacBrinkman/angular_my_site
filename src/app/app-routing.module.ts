import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './me/about/about.component';
import { EducationComponent } from './me/education/education.component';
import { ProjectsComponent } from './me/projects/projects.component';
import { ResumeComponent } from './me/resume/resume.component';
import { WorkComponent } from './me/work/work.component';

const routes: Routes = [
  {path: '', component: AboutComponent, data: {title: 'About Me'}},
  {path: 'about', component: AboutComponent, data: {title: 'About Me'}},
  {path: 'resume', component: ResumeComponent, data: {title: 'Resume'}},
  {path: 'work', component: WorkComponent, data: {title: 'Experience'}},
  {path: 'projects', component: ProjectsComponent, data: {title: 'Projects'}},
  {path: 'education', component: EducationComponent, data: {title: 'Education'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
