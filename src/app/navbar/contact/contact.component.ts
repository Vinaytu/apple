import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public num1:number= 0;
  public num:any= '';
  

  public sharedmsg:string ="";
constructor(
  private sharedService:SharedService,
  public clicksCount: SharedService,
){}

ngOnInit(): void {
  this.sharedmsg = this.sharedService.serviceMessage;
}
handleClick() {
  this.clicksCount.increment()
}
oddeven(){
  if (this.num1 % 2 ===0){
    return(' is Even Number')
  }
  else{
    return(' is Odd Number')
  }
}

};

