import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  coursesList: Array<any>;
  buttonIcon = faArrowAltCircleDown;

  constructor() {}

  ngOnInit() {
    fetch('../../../assets/courses.json')
      .then(res => res.json())
      .then(data => (this.coursesList = data.courses))
      .catch(e => console.log(e));
  }
}
