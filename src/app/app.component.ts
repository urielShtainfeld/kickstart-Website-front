import {Component, OnInit} from '@angular/core';
import {projectService} from "./shared/project.service";
import {userService} from "./shared/user.service";
import {ServerService} from "./shared/server.service";
import {LocalStorageService} from "./shared/local-storage.service";
import {interval} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [projectService,userService,ServerService,LocalStorageService]
})
export class AppComponent implements OnInit{
  loading: boolean;
  private refreshInterval$ = interval(1000);
  constructor(private userService: userService,private serverService: ServerService){
    if (this.userService.getUserName()){
      this.userService.userAutenticated = true;
    }

    this.serverService.getProjects();
    this.loading = this.serverService.loadingFinished;
  }

  ngOnInit(){
    this.refreshInterval$.subscribe(()=> {
      if (this.serverService.loadingFinished){
        this.loading = false;
      }
    });
  }
}
