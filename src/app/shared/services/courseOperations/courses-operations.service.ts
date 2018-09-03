import { Injectable } from '@angular/core';
import { CourseInterface } from '../../models/course-interface';
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesOperationsService {
  private coursesList: Array<CourseInterface>;

  constructor() {}

  ngOnInit() {
  }

  private fetchCourses() {
    return new Promise((res, rej) => {
      fetch('../../../assets/courses.json')
        .then(res => res.json())
        .then(data => {
          this.coursesList = data.courses;
          res(this.coursesList);
        })
        .catch(e => rej(e));
    });

  }

  getCoursesList() {
    return new Promise((res, rej) => {
      this.coursesList
        ? res(this.coursesList)
        : this.fetchCourses()
            .then(courses => res(courses))
            .catch(e => rej(e));
    });
  }

  createCourse({
    id,
    title,
    date,
    duration,
    creationDate,
    description,
    isTopRated,
    img,
    buttonNames
  }: CourseInterface) {
    return new Course(
      id,
      title,
      date,
      duration,
      creationDate,
      description,
      isTopRated,
      img,
      buttonNames
    );
  }

  getCourseById(id: string) {
    return this.coursesList.find(_ => id === _.id);
  }

  updateCourse(id: string, options: CourseInterface) {
    const existingCourse = this.getCourseById(id);
    const newCourse = this.createCourse({...existingCourse, ...options});

    this.removeCourse(id);
    this.coursesList.push(newCourse);
  }

  removeCourse(id: string) {
    this.coursesList = this.coursesList.filter(_ => id !== _.id);
  }
}
