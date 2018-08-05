import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../project.model";

@Component({
  selector: 'app-archive-project-item',
  templateUrl: './archive-project-item.component.html',
  styleUrls: ['./archive-project-item.component.css']
})
export class ArchiveProjectItemComponent implements OnInit {

  @Input() proj: Project;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }

}
