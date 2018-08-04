import { Component, OnInit ,Input} from '@angular/core';
import {Project} from "../../project.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {projectService} from "../../../shared/project.service";
import {userService} from "../../../shared/user.service";
import {ServerService} from "../../../shared/server.service";

@Component({
  selector: 'app-live-project-detail',
  templateUrl: './live-project-detail.component.html',
  styleUrls: ['./live-project-detail.component.css']
})
export class LiveProjectDetailComponent implements OnInit {
  proj: Project;
  id: number;
  canEdit: boolean = false;
  isUser: boolean = false;
  constructor(private projectsService: projectService,private route: ActivatedRoute, private router: Router
              , private userService: userService, private serverService: ServerService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.proj = this.projectsService.getProjectById(this.id);
        if (this.userService.userAutenticated ) {
          if (this.userService.getUserType().toUpperCase() === 'ADMIN' ||
            (this.userService.getUserType().toUpperCase() === 'CREATOR' && this.proj.owner === this.userService.getUserName())) {
            this.canEdit = true;
            this.isUser = true;
          } else {
            this.canEdit = false;
          }
        }
        else{
          this.isUser = false;
        }
      }
    );


  }

  onClickEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }
  onDonate(){
    this.router.navigate(['donate'],{relativeTo: this.route});
  }
  onDelete(){
    this.projectsService.archiveProject(this.id);
    this.serverService.updatePoject( this.projectsService.getArchiveProjects()[ this.projectsService.getArchiveProjects().length-1]);
    this.router.navigate(['/live']);
  }
}
