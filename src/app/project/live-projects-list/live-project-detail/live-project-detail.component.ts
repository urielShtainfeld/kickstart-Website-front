import { Component, OnInit ,Input} from '@angular/core';
import {Project} from "../../project.model";

@Component({
  selector: 'app-live-project-detail',
  templateUrl: './live-project-detail.component.html',
  styleUrls: ['./live-project-detail.component.css']
})
export class LiveProjectDetailComponent implements OnInit {
  @Input() proj: Project;
  constructor() { }

  ngOnInit() {
  }

}
