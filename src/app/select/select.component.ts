import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  colors = [
    {id: 1, name: 'Green'},
    {id: 2, name: 'Blue'},
    {id: 3, name: 'Red'},
  ];

  color = 2;
  constructor() { }

  ngOnInit() {
  }

}
