import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[townColor]'
})
export class TownColorDirective {
  // @Input() windArrow: number;
  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    // el.nativeElement.style.transform.rotate = this.windArrow;
    // el.nativeElement.style
    // el.nativeElement.innerHTML.appendChild()
  }
}
