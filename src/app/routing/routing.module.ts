import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseComponent } from '../components/course/course.component';
import { MainComponent } from '../components/main/main.component';
import { NewCourseComponent } from '../pages/new-course/components/new-course/new-course.component';
import { ErrorComponent } from '../pages/error/components/error/error.component';

const ROUTES = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', component: MainComponent, children: [
    { path: 'new', component: NewCourseComponent },
    { path: ':id', component: CourseComponent },
  ]},
  // { path: 'error', component: ErrorComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
