import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  public buttonIcon: object = faPlus;
  public inputText: string = '';

  constructor() { }

  ngOnInit() {
  }

  logInputText() {
    console.log(this.inputText);
  }

}
