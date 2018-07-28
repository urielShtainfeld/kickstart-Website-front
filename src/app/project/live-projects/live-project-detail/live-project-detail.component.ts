import { Component, OnInit ,Input} from '@angular/core';
import {Project} from "../../project.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {projectService} from "../../../shared/project.service";

@Component({
  selector: 'app-live-project-detail',
  templateUrl: './live-project-detail.component.html',
  styleUrls: ['./live-project-detail.component.css']
})
export class LiveProjectDetailComponent implements OnInit {
  proj: Project;
  id: number;
  constructor(private projectsService: projectService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.proj = this.projectsService.getProjectById(this.id);
      }
    );
  }

  onClickEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }
  onDelete(){
    this.projectsService.archiveProject(this.id);
    this.router.navigate(['/live']);
  }
}
