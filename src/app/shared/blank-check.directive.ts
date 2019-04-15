import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBlankCheck]'
})
export class BlankCheckDirective {

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('change') onChange() {
    console.log("called");
    if (!this.el.nativeElement.value || this.el.nativeElement.value.length <= 0) {
      console.log("here");
      this.render.setStyle(this.el.nativeElement, 'border-color', 'red');
    }
  }
}
