import {Donate} from "./donate.model";

export class Project {
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

  constructor(name: string,description: string,imagePath: string,daysLeft: number,hoursLeft: number,neededMoney: number,
              linkToExample: string,owner: string){
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
}
