import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';
import { SliceToLengthPipe } from './shared/pipes/slice-to-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    CoursesListComponent,
    FooterComponent,
    MainComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    ButtonComponent,
    InputComponent,
    SliceToLengthPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
