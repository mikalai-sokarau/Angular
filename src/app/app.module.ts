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
import { DurationPipe } from './shared/pipes/duration/duration.pipe';
import { OrderByPipe } from './shared/pipes/orderBy/order-by.pipe';
import { CoursesOperationsService } from './shared/services/courseOperations/courses-operations.service';
import { AuthService } from './shared/services/authorization/auth.service';

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
    DurationPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    CoursesOperationsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
