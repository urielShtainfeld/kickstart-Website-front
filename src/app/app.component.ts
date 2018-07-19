import { Component } from '@angular/core';
import {projectService} from "./shared/project.service";
import {userService} from "./shared/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [projectService,userService]
})
export class AppComponent{
  loadedType: string = 'live';
}
