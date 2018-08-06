import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {projectService} from "./project.service";
import {userService} from "./user.service";
import {User} from "../auth/user.model";
import {Project} from "../project/project.model";
import {Donate} from "../project/donate.model";
import { interval } from 'rxjs';

const backEndUrl = 'http://localhost:3000/';

@Injectable()
export class ServerService {
  public loadingFinished: boolean =false;
  constructor(private http: Http,private projectService: projectService,private userService: userService){}

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
          });

          let newliveProjects = [];
          let newArvhiceProjects = [];
          let newKickedoutProjects = [];
          projects.forEach((project) =>{
            let newDonations = [];
            project.donations.forEach((donation) =>{
              newDonations.push(new Donate(donation.name,+donation.amount))
            });
            let moneyCollected = Number.parseFloat(project.moneyCollected);

            switch (project.status.toUpperCase()) {
              case 'LIVE':{
                if(new Date(project.endDate).getTime() - new Date().getTime() < 0){
                  let proj = new Project(project.uniqueId,project.name,
                    project.description,
                    project.imagePath,
                    project.daysLeft,
                    project.hoursLeft,
                    project.neededMoney,
                    project.linkToExample,
                    project.owner,
                    newDonations,
                    moneyCollected,
                    new Date(project.endDate),
                    project.videoPath);
                  if (proj.checkIfKickedOut()){
                    newKickedoutProjects.push(proj);
                  }else {
                    newArvhiceProjects.push(proj);
                  }
                  this.updatePoject(proj);
                  break;
                }
                newliveProjects.push(
                  new Project(project.uniqueId,project.name,
                    project.description,
                    project.imagePath,
                    project.daysLeft,
                    project.hoursLeft,
                    project.neededMoney,
                    project.linkToExample,
                    project.owner,
                    newDonations,
                    moneyCollected,
                    new Date(project.endDate),
                    project.videoPath));
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
                    newDonations,
                    moneyCollected,
                    new Date(project.endDate),
                    project.videoPath));
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
                    newDonations,
                    moneyCollected,
                    new Date(project.endDate),
                    project.videoPath));
                break;
              }

            }

          });
          this.projectService.setProjects(newliveProjects);
          this.projectService.setKickedoutProjects(newKickedoutProjects);
          this.projectService.setArchiveProjects(newArvhiceProjects);
          this.loadingFinished = true;
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
