import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public message:string = "Message From Parent Component"
  public ReciveChildMag : string = " Default Message";
  public sharedmsg:string ="This is Default Shared Service Msg";
sharedservicemsg: any;

  constructor(
    private sharedService:SharedService,
    public clicksCount: SharedService,
  ){}
  ngOnInit(): void {
    
  }
  ReciveChildMsg(data:string){
    this.ReciveChildMag=data; 
  }

  changeservicemsg(){
    this.sharedService.setmessage("This is changed from about component")
    this.sharedmsg = this.sharedService.serviceMessage;
  }

  handleClick() {
    this.clicksCount.increment()
  }

  // currentItem="Telivision"
  // items = ['item1', 'item2', 'item3', 'item4'];
  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }
}
