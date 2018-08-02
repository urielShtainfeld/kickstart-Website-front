import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {projectService} from "./project.service";
import {userService} from "./user.service";
import {User} from "../auth/user.model";
import {Observable} from "rxjs/Observable";

const backEndUrl = 'http://localhost:3000/';

@Injectable()
export class ServerService {
  constructor(private http: Http,private projectService: projectService,private userService: userService){}
  private result:string;

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
  async storeUser(user: User){
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
          console.log('user sign in successfully');
          let usertype;
     //     let jsonResponse = response.json();
          if (response.json()) {
            usertype = response.json();
          }
          this.userService.setUser(new User(username,password,usertype));
          return usertype;
        },(error:any) => {
          console.log(error.json());

          throw error;
        });

  }
}
