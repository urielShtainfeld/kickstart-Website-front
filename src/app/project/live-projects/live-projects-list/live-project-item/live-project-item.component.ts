import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../project.model";

@Component({
  selector: 'app-live-project-item',
  templateUrl: './live-project-item.component.html',
  styleUrls: ['./live-project-item.component.css']
})
export class LiveProjectItemComponent implements OnInit {
  @Input() proj: Project;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
