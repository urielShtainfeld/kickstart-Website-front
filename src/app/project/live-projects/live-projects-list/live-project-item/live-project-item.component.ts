import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../project.model";
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import {Subject} from "rxjs/Subject";
import { interval } from 'rxjs';


@Component({
  selector: 'app-live-project-item',
  templateUrl: './live-project-item.component.html',
  styleUrls: ['./live-project-item.component.css']
})
export class LiveProjectItemComponent implements OnInit {
  @Input() proj: Project;
  @Input() index: number;
  count: number;
  timeChange: Subject<number>;
  private refreshInterval$ = interval(1000);
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  constructor() {

  }

  ngOnInit() {
    let now = new Date();
    this.count = this.proj.endDate.getTime() - now.getTime();
    this.seconds = Math.floor(this.count / 1000);
    this.minutes = Math.floor(this.seconds/60);
    this.hours = Math.floor(this.minutes/60);
    this.days = Math.floor(this.hours/24);

    this.hours%= 24;
    this.minutes %= 60;
    this.seconds %=60;

    this.refreshInterval$.subscribe(()=> {
      this.seconds -=1;
      if (this.seconds<0){
        this.seconds = 59;
        this.minutes -=1
      }
      if (this.minutes<0){
        this.minutes = 59;
        this.hours-=1;
      }
      if (this.hours < 0 ){
        this.hours = 23;
        this.days -=1;
      }
      if (this.days < 0){
        this.proj.checkIfKickedOut();
        }
      }
    );
  }
}

    // this.countDown = timer(0,1000).pipe(
    //   take(this.count),
    //   map(()=> --this.count)
    // );

