import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseInterface } from '../../shared/models/course-interface';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
  @Output() onClickHandler = new EventEmitter<string>();

  editIcon = faEdit;
  deleteIcon = faTrashAlt;
  buttonNames = ['Edit', 'Delete'];

  onClick(event) {
    this.onClickHandler.emit(this.id)
  }

  constructor() { }

  ngOnInit() {
  }
}
