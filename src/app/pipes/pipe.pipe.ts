import { Pipe, PipeTransform } from '@angular/core';
import { EMPTY } from 'rxjs';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
    transform(value: any, data:any): any {

      if (  (value.length ===0) ){
        return ('The value is Empty')
      }
      else if (value % 2 ===0 ){
        return( 'Entered Number is  Even Number')
      }  
      else if ( value % 2 ===1){
        return('Entered Number is  odd Number')
      }
      else{
        return('This  is not a valid number')
      }
  }

//   if (condition1)
// {
//     print
// }
// else if (condition2)
// {
//     print2
// }
// else
// {
//     print3
// }

}
