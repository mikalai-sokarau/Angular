import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  text = 'text';
  onClick = () => console.log('click');
  logoSrc = '/path';

  constructor() { }

  ngOnInit() {
  }



}
