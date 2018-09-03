import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  @Output() searchClickHandler = new EventEmitter<string>();

  public buttonIcon: object = faPlus;
  public inputText: string = '';

  constructor() { }

  ngOnInit() {
  }

  logInputText() {
    this.searchClickHandler.emit(this.inputText)
  }

}
