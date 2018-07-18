import {Component, Input, OnInit} from '@angular/core';
import {Project} from "./project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() viewType: String;
  selectedProj: Project = null;
  constructor() { }

  ngOnInit() {
  }

}
