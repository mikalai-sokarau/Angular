import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { LoginModule } from './pages/login/login.module';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    FormsModule,
    FontAwesomeModule
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
