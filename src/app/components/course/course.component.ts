import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  name = 'course name';
  duration = '1h 39m';
  date = '01.01.1980';
  description = 'course description';

  constructor() { }

  ngOnInit() {
  }

}
