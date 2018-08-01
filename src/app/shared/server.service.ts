import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {projectService} from "./project.service";
import {userService} from "./user.service";
import {User} from "../auth/user.model";

const backEndUrl = 'http://localhost:3000/';

@Injectable()
export class ServerService {
  constructor(private http: Http,private projectService: projectService,private userService: userService){}

  storeProject(){
    this.http.post(backEndUrl+'project',this.projectService.getProjects())
      .subscribe(
        (response: any) => {
            console.log(response);
        }
      );
  }
  getProjects(){
    this.http.get(backEndUrl+'project')
      .subscribe(
        (response: any) => {
          const projects = response.json();
          this.projectService.setProjects(projects);
        }
      );
  }
  storeUser(user: User){
    this.http.post(backEndUrl+'user',user)
      .subscribe(
        (response: any) => {
          console.log(response);
        });
  }
  signInUser(username: string,password: string){
    this.http.post(backEndUrl+'signIn',new User(username,password,'')) //TODO: fix body for user and pass
      .subscribe(
        (response: any) => {
          console.log(response);
          let usertype;
          if (response.body.data.usertype) {
            usertype = response.body.data.usertype;
          }
          let user = new User(username,password,usertype);
          this.userService.setUser(user);
        },(error:any) => {
          console.log(error);
        });
  }


}
