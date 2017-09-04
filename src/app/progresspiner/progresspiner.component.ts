import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-progresspiner',
  templateUrl: './progresspiner.component.html',
  styleUrls: ['./progresspiner.component.css']
})
export class ProgresspinerComponent implements OnInit {
  progress = 0;
  timer;

  // indeterminate
  isLoading = false;

  constructor() {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 20);

    // indeterminate
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  // indeterminate
  ngOnInit() {
  }

  getCourses() {
    return Observable.timer(2000);
  }
}
