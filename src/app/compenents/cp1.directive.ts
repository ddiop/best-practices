import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[cp1]'
})
export class Cp1Directive {
  @Input('cp1')
  private el;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  performTask() {
    const element = this.el;
    const text = this.renderer.createText(`Click here to add ${element}`);
    this.el = this.renderer.createElement(this.el);
    this.renderer.appendChild(this.el, text);
    this.renderer.appendChild(this.elRef.nativeElement, this.el);
    this.el=element;
  }
}
