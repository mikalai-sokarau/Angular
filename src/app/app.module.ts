import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './pages/login/login.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ErrorModule } from './pages/Error/error.module';
import { RoutingModule } from './routing/routing.module';
import { NewCourseModule } from './pages/new-course/new-course.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    LoginModule,
    NewCourseModule,
    ErrorModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    CoursesListComponent,
    FooterComponent,
    MainComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
