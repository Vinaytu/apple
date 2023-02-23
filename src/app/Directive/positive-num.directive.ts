import { Directive, ElementRef, HostListener } from '@angular/core';
import { __param } from 'tslib';

@Directive({
  selector: '[appPositiveNum]'
})
export class PositiveNumDirective {

  // private regex:RegExp = new RegExp('^[0-9]*$'); //integer Number
  private regex:RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g); //integer Number
  private SpicialKeys:Array<string> = ['Backspace','ArrowLeft','ArrowRight'] //float Number

  constructor(private elementRef:ElementRef) { }

  @HostListener('keydown',['$event']) onKeyDown(event:KeyboardEvent){
    
    if (this.SpicialKeys.indexOf(event.key) !== -1){ 
      return;
    }

    const inputvalue:string=this.elementRef.nativeElement.value.concat(event.key);
    console.log(event.key);
    if (inputvalue && !String(inputvalue).match(this.regex)){
      event.preventDefault()
    }
  }
      
};
