import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {


  constructor(private elem:ElementRef) {
 
    this.elem.nativeElement.style.boxShadow = "0px 0px 10px gray"
   }

  
}
