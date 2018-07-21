import {Component, OnInit} from '@angular/core';
import {Project} from "../../project.model";
import {projectService} from "../../../shared/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-live-projects-list',
  templateUrl: './live-projects-list.component.html',
  styleUrls: ['./live-projects-list.component.css']
})
export class LiveProjectsListComponent implements OnInit {
  liveProjects: Project[] = [];

  constructor(private projectService: projectService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this.liveProjects = this.projectService.getProjects();
  }
  onNewProject(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
