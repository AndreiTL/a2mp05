import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[townColor]'
})
export class TownColorDirective {
  @Input() temperature: number;
  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    // el.nativeElement.style.transform.rotate = this.windArrow;
    // el.nativeElement.style
    // el.nativeElement.innerHTML.appendChild()
    let colors: string = `
#ffcccc
#ffd9cc
#ffe6cc
#fff2cc
#ffffcc
#f2ffcc
#e6ffcc
#d9ffcc
#ccffcc
#ccffd9
#ccffe6
#ccfff2
#ccffff
#ccf2ff
#cce6ff
#ccd9ff
#ccccff
#d9ccff
#e6ccff
#f2ccff
#ffccff
#ffccf2
#ffcce6
#ffccd9
#ffcccc
`;

    

    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
