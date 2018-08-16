import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
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
import { SliceToLengthPipe } from './shared/pipes/slice-to-length.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, FormsModule],
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
        SliceToLengthPipe
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('should have element', () => {

  // });
  // it(`should have as title 'ng-app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ng-app');
  // }));
  // it('should render title an app-header tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('app-header').textContent).toContain('Welcome to ng-app!');
  // }));
});
