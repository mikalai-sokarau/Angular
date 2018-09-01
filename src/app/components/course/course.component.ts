import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseInterface } from '../../shared/models/course-interface';
import { faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const COURSE_FRESHNESS_TIME = 2419200000;
const FRESH_COURSE_COLOR = 'green';
const UPCOMING_COURSE_COLOR = 'blue';

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
  @Input() created: string;
  @Input() img: string;
  @Output() onClickHandler = new EventEmitter<string>();

  public color;
  public editIcon: IconDefinition = faEdit;
  public deleteIcon: IconDefinition = faTrashAlt;
  public buttonNames = ['Edit', 'Delete'];
  public currentDate = new Date();
  public creationDate: Date;

  onClick(event) {
    this.onClickHandler.emit(this.id);
  }

  constructor() {}

  ngOnInit() {
    this.creationDate = new Date(this.created);
    const creationMs = this.creationDate.getTime();
    const currentMs = this.currentDate.getTime();
    
    if (creationMs < currentMs && creationMs >= currentMs - COURSE_FRESHNESS_TIME) {
      this.color = FRESH_COURSE_COLOR;
    } else if (creationMs > currentMs) {
      this.color = UPCOMING_COURSE_COLOR;
    }
  }
}
