import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[setProperty]'
})
export class SetPropertyDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('click')
  performTask() {
    this.renderer.setProperty(this.elRef.nativeElement, 'id', 'addId');

  }
}
