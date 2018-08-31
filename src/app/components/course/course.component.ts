import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeDifferenceService } from '../../shared/services/time/timeDifference.service';
import { CourseInterface } from '../../shared/models/course-interface';
import { faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const COURSE_FRESHNESS_TIME = 2419200000,
  FRESH_COURSE_COLOR = 'green',
  UPCOMING_COURSE_COLOR = 'blue';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements CourseInterface, OnInit {
  @Input()
  id: string;
  @Input()
  title: string;
  @Input()
  date: string;
  @Input()
  duration: string;
  @Input()
  description: string;
  @Input()
  img: string;
  @Output()
  onClickHandler = new EventEmitter<string>();

  public color = 'red';
  public editIcon: IconDefinition = faEdit;
  public deleteIcon: IconDefinition = faTrashAlt;
  public buttonNames = ['Edit', 'Delete'];
  public creationDate = new Date();
  public currentDate = new Date();

  onClick(event) {
    this.onClickHandler.emit(this.id);
  }

  constructor(private timeDifference: TimeDifferenceService) {}

  ngOnInit() {
    if (this.creationDate.getMilliseconds() < this.currentDate.getMilliseconds() &&
        this.creationDate.getMilliseconds() >= this.currentDate.getMilliseconds() - COURSE_FRESHNESS_TIME) {
          this.color = FRESH_COURSE_COLOR;
    } else if (this.creationDate > this.currentDate) {
      this.color = UPCOMING_COURSE_COLOR;
    }
  }
}
