import { Component, OnInit, Input } from '@angular/core';
import { CourseInterface } from '../../shared/models/course-interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements CourseInterface, OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() date: string;
  @Input() duration: string;
  @Input() description: string;
  @Input() img: string;

  buttonNames = ['Edit', 'Delete'];

  constructor() { }

  ngOnInit() {
  }

}
