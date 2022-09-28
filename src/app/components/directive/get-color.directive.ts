import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGetColor]'
})
export class GetColorDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#e35e6b'
   }
}
