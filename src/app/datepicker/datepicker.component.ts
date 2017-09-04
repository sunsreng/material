import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);
  constructor() { }

  ngOnInit() {
  }

}
