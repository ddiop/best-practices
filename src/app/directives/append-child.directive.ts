import {  ElementRef, HostListener, Renderer2 } from '@angular/core';import { Directive } from '@angular/core';

@Directive({
  selector: '[demoAppendChild]'
})
export class AppendChildDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('click')
  performTask() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.elRef.nativeElement, li);
  }
}
