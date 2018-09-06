import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/authorization/auth.service';
import { CoursesOperationsService } from './services/courseOperations/courses-operations.service';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { SliceToLengthPipe } from './pipes/sliceToLength/slice-to-length.pipe';
import { BorderStylingDirective } from './directives/borderStyling/border-styling.directive';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
    DurationPipe,
    OrderByPipe,
    SliceToLengthPipe,
    BorderStylingDirective,
    ButtonComponent
  ],
  providers: [
    AuthService,
    CoursesOperationsService
  ]
})
export class SharedModule { }
