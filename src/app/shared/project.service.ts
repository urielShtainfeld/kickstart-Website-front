import {Injectable} from "@angular/core";
import {Project} from "../project/project.model";
import {Donate} from "../project/donate.model";
import {Subject} from "rxjs/Subject";
import index from "@angular/cli/lib/cli";


@Injectable()
export class projectService{

  projectsChanged = new Subject<Project[]>();
  kickedoutProjectsChanged = new Subject<Project[]>();
  archiveProjectsChanged = new Subject<Project[]>();

  private liveProjects : Project[] = [];
  // private liveProjects : Project[] =[new Project('a','b','https://www.google.co.il/imgres?imgurl=https%3A%2F%2Fwww.askideas.com%2Fmedia%2F11%2FCat-Showing-Punches-Funny-Fight-Image.jpg&imgrefurl=https%3A%2F%2Fwww.askideas.com%2Fcat-showing-punches-funny-fight-image%2F&docid=y2naVTVW3nL7GM&tbnid=5ClvjD51Lv6aLM%3A&vet=10ahUKEwjcwf2xyqTcAhWEXCwKHWTNCIUQMwg1KAMwAw..i&w=500&h=375&bih=635&biw=1366&q=funny%20fight&ved=0ahUKEwjcwf2xyqTcAhWEXCwKHWTNCIUQMwg1KAMwAw&iact=mrc&uact=8'
  //   ,10,1,100,'aaa','uuu'),
  //   new Project('b','baa','https://www.google.co.il/imgres?imgurl=https%3A%2F%2Fwww.askideas.com%2Fmedia%2F11%2FCat-Showing-Punches-Funny-Fight-Image.jpg&imgrefurl=https%3A%2F%2Fwww.askideas.com%2Fcat-showing-punches-funny-fight-image%2F&docid=y2naVTVW3nL7GM&tbnid=5ClvjD51Lv6aLM%3A&vet=10ahUKEwjcwf2xyqTcAhWEXCwKHWTNCIUQMwg1KAMwAw..i&w=500&h=375&bih=635&biw=1366&q=funny%20fight&ved=0ahUKEwjcwf2xyqTcAhWEXCwKHWTNCIUQMwg1KAMwAw&iact=mrc&uact=8'
  //     ,7,1,250,'aaa','hhh')];

  private archiveProjects: Project[] =[];
  private kickedoutProjects: Project[] = [];

  setProjects(projects: Project[]){
    this.liveProjects = projects;
    this.projectsChanged.next(this.liveProjects.slice());
  }

  setKickedoutProjects(projects: Project[]){
    this.kickedoutProjects = projects;
    this.kickedoutProjectsChanged.next(this.kickedoutProjects.slice());
  }

  setArchiveProjects(projects: Project[]){
    this.archiveProjects = projects;
    this.archiveProjectsChanged.next(this.archiveProjects.slice());
  }

  getProjects(){
    return this.liveProjects.slice();
  }

  getKickedoutProjects(){
    return this.kickedoutProjects.slice();
  }

  getArchiveProjects(){
    return this.archiveProjects.slice();
  }
  getProjectById(id: number){
    return this.liveProjects[id];
  }

  addDonation(donation: Donate,id: number){
    this.liveProjects[id].addDonation(donation);
    this.projectsChanged.next(this.liveProjects.slice());
  }

  addProject(newProject: Project){
    this.liveProjects.push(newProject);
    this.projectsChanged.next(this.liveProjects.slice());
  }

  updateProject(index: number, editedProject: Project){
    this.liveProjects[index] = editedProject;
    this.projectsChanged.next(this.liveProjects.slice());
  }
  archiveProject(index: number){
    this.liveProjects[index].status = 'Archive';
    this.archiveProjects.push(this.liveProjects[index]);
    this.liveProjects.splice(index,1);
    this.projectsChanged.next(this.liveProjects.slice());
    this.archiveProjectsChanged.next(this.archiveProjects.slice());
  }

  deleteDonation(projectIndex: number,donationIndex: number){
    this.liveProjects[projectIndex].moneyCollected -= this.liveProjects[projectIndex].donations[donationIndex].amount;
    this.liveProjects[projectIndex].donations.splice(donationIndex,1);
    this.projectsChanged.next(this.liveProjects.slice());
  }

}
