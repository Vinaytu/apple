import { Component,Input,Output,EventEmitter, OnInit} from '@angular/core';
import { every } from 'rxjs';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() receiveParentMessage:string = "Default Message"

  public childMessage = " Msg From Child Component"

  
  @Output() messageEmitter = new EventEmitter<string>();

  @Output() counter1 = new EventEmitter<any>();

  constructor(public clicksCount: SharedService,){}

  ngOnInit(): void {
    
  }

  passMsgToParent(){
    this.messageEmitter.emit(this.childMessage);
  }


  handleClick() {
    this.clicksCount.increment()
  }


}
//   @Input() item='';
//   @Output() newItemEvent= new EventEmitter<string>();

//   addNewItem(value:string){
//     this.newItemEvent.emit(value)
//   }
//   removeitem(){
//     this.addNewItem
//   }
// }