import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  categories = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'}
  ];
  constructor() { }

  ngOnInit() {
  }

  selectCategory(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }
}
