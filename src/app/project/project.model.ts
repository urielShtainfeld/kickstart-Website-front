import {Donate} from "./donate.model";
import { Guid } from "guid-typescript";

export class Project {
  public uniqueId: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public daysLeft: number;
  public hoursLeft: number;
  public neededMoney: number;
  public moneyCollected: number;
  public linkToExample: string;
  public status: string;
  public owner: string;
  public donations: Donate[] = [];

  constructor(uniqueId: string,name: string,description: string,imagePath: string,daysLeft: number,hoursLeft: number,neededMoney: number,
              linkToExample: string,owner: string){
  if (uniqueId != undefined){
    this.uniqueId = uniqueId;
  } else {
    this.uniqueId = Guid.create().toString();
  }
  this.name = name;
  this.description = description;
  this.imagePath = imagePath;
  this.daysLeft = daysLeft;
  this.hoursLeft = hoursLeft;
  this.neededMoney = neededMoney;
  this.moneyCollected = 0;
  this.linkToExample = linkToExample;
  this.status = 'live';
  this.owner = owner;
  }
  GetRecruitmentPercent(){
    return this.moneyCollected/this.neededMoney*100;
  }
  addDonation(donation: Donate){
    this.moneyCollected += donation.amount;
    this.donations.push(donation);
  }
  checkIfKickedOut(){
    if(this.GetRecruitmentPercent() >= 100 ){
      this.status = 'kickedout';
      return true;
    } else {
      this.status = 'Archive';
      return false;
    }
  }

}
