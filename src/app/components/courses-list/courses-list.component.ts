import { Component, OnInit, Input } from '@angular/core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { CoursesOperationsService } from '../../shared/services/courseOperations/courses-operations.service';
import { CourseInterface } from '../../shared/models/course-interface';

const EMPTY_COURSES_LIST_MESSAGE = "No data, feel free to add new course.";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() filter: string;
  coursesList: Array<CourseInterface>;
  buttonIcon = faArrowAltCircleDown;
  errorMessage: string;

  constructor(private coursesService: CoursesOperationsService) {}

  ngOnInit() {
    this.coursesService.getCoursesList()
      .then((courses: Array<CourseInterface>) => this.coursesList = courses)
      .catch(e => {
        this.errorMessage = EMPTY_COURSES_LIST_MESSAGE;
        console.log(e);
      });
  }

  editCourse(id) {
    console.log(id)
  }

  deleteCourse(id) {
    if (window.confirm('Do you really want to delete this course?')) {
      this.coursesService.removeCourse(id);
      this.coursesService.removeCourse.call(this, id);
    }
  }

  onClick(id: string) {
    console.log(id);
  }

  loadMore() {
    console.log('load more');
  }
}
