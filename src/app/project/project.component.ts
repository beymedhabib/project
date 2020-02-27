import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  backgroundUrl = 'https://images.unsplash.com/photo-1445754574409-bcd715e18017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80';
  constructor() { }

  ngOnInit() {
  }
}
