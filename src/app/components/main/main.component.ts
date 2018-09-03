import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filterBy: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchClickHandler(query: string) {
    this.filterBy = query;
  }
}
