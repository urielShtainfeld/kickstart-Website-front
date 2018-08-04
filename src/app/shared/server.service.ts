import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {projectService} from "./project.service";
import {userService} from "./user.service";
import {User} from "../auth/user.model";
import {Project} from "../project/project.model";

const backEndUrl = 'http://localhost:3000/';

@Injectable()
export class ServerService {
  constructor(private http: Http,private projectService: projectService,private userService: userService){}
  private result:string;

  // storeProject(){
  //   this.projectService.getProjects().forEach( (proj) => {
  //     this.http.post(backEndUrl+'project',proj)
  //       .subscribe(
  //         (response: any) => {
  //           console.log(response);
  //         }
  //       );
  //   })
  //
  // }
  updatePoject(project: Project){
    this.http.post(backEndUrl+'updateproject',project)
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }

  storeOneProject(project: Project){
      this.http.post(backEndUrl+'project',project)
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
          const projects =[];
          response.json().forEach((proj) => {
            projects.push(proj)
          })
          let newliveProjects = [];
          let newArvhiceProjects = [];
          let newKickedoutProjects = [];
          projects.forEach((project) =>{
            switch (project.status.toUpperCase()) {
              case 'LIVE':{
                newliveProjects.push(
                  new Project(project.uniqueId,project.name,
                    project.description,
                    project.imagePath,
                    project.daysLeft,
                    project.hoursLeft,
                    project.neededMoney,
                    project.linkToExample,
                    project.owner,
                    project.donations,
                    project.moneyCollected));
                break;
              }
              case 'KICKEDOUT':{
                newKickedoutProjects.push(
                  new Project(project.uniqueId,project.name,
                    project.description,
                    project.imagePath,
                    project.daysLeft,
                    project.hoursLeft,
                    project.neededMoney,
                    project.linkToExample,
                    project.owner,
                    project.donations,
                    project.moneyCollected));
                break;
              }
              case 'ARCHIVE':{
                newArvhiceProjects.push(
                  new Project(project.uniqueId,project.name,
                    project.description,
                    project.imagePath,
                    project.daysLeft,
                    project.hoursLeft,
                    project.neededMoney,
                    project.linkToExample,
                    project.owner,
                    project.donations,
                    project.moneyCollected));
                break;
              }

            }

          });
          this.projectService.setProjects(newliveProjects);
          this.projectService.setKickedoutProjects(newKickedoutProjects);
          this.projectService.setArchiveProjects(newArvhiceProjects);
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
    this.http.post(backEndUrl+'signIn',new User(username,password,''))
      .subscribe(
        (response: any) => {
          console.log('user sign in successfully');
          let usertype;
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
