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
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { ButtonComponent } from './shared/button/button.component';
import { SliceToLengthPipe } from './shared/pipes/sliceToLength/slice-to-length.pipe';
import { BorderStylingDirective } from './shared/directives/borderStyling/border-styling.directive';
import { DateFormatterPipe } from './shared/pipes/dateFormatter/date-formatter.pipe';
import { DurationPipe } from './shared/pipes/duration/duration.pipe';

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
    SliceToLengthPipe,
    BorderStylingDirective,
    DateFormatterPipe,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
