import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[parentNode]'
})
export class ParentNodeDirective implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.renderer.listen(this.elRef.nativeElement, 'click', () => {

      const parent = this.renderer.parentNode(this.elRef.nativeElement);
      this.renderer.setStyle(parent, 'color', 'red');
    });
  }
}
