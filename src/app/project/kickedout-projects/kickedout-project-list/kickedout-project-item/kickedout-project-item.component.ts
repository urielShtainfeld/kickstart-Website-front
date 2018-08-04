import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../project.model";

@Component({
  selector: 'app-kickedout-project-item',
  templateUrl: './kickedout-project-item.component.html',
  styleUrls: ['./kickedout-project-item.component.css']
})
export class KickedoutProjectItemComponent implements OnInit {
  @Input() proj: Project;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
