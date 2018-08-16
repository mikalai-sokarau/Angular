import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() icon: object;
  @Output() onClickHandler = new EventEmitter<Event>();

  onClick(event: Event) {
    this.onClickHandler.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }
}
