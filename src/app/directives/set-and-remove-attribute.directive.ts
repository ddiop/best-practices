import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[setAndRemoveAttribute]'
})
export class SetAndRemoveAttributeDirective {


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setAttribute(this.elRef.nativeElement, 'value', 'mouseover!');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'value');
  }
}
