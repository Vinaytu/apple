import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

public clr:ColorGamut|undefined; //color picker


public odd1:ColorGamut|undefined; //color picker table row odd
public even1:ColorGamut|undefined; //color picker table row even


// public count=0;

// counter(type:string){
//   type==='add'?this.count++:this.count--;
// }
userlist:any = [{
  slno:1,
  name:"Vinay",
  empId:20022,
  salary:50000
},
  {
    slno:2,
    name:"Varun",
    empId:20234,
    salary:40000
  },
  {
    slno:3,
    name:"Shiva",
    empId:20548,
    salary:70000
  },
  {
    slno:4,
    name:"Bhavya",
    empId:20548,
    salary:55000
  }]

  

 constructor( private sharedService:SharedService){

 }
 ngOnInit(): void {
   
 }

 public names:string="";
 public id:number= 0;
 public salr:number= 0;

 public addUser(){
  let currentIdCount = this.userlist.length +1;
  this.userlist.push({
    slno:currentIdCount, name:this.names,empId:this.id,salary:this.salr
  }); 
 }

 public deleteUser(index:number){
    this.userlist.splice(index,1)
}
 public refresh(){
  this.userlist = [{
    slno:1,
    name:"Vinay",
    empId:20022,
    salary:50000
  },
    {
      slno:2,
      name:"Varun",
      empId:20234,
      salary:40000
    },
    {
      slno:3,
      name:"Shiva", 
      empId:20548,
      salary:70000
    },
    {
      slno:4,
      name:"Bhavya",
      empId:20548,
      salary:55000
    }]
   }

   userlistempty(){
    this.userlist }

  dummylogin(){
    this.sharedService.setlogin();

  }

  dummylogout(){
    this.sharedService.setlogout();

    
  }
  }
