import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login = 'user';
  logInButtonText = this.login ? "Log out" : "Log in";

  constructor() { }

  ngOnInit() {
  }


}
