import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {Renderer3} from '@angular/core/src/render3/renderer';


@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective {

  private _defaultColor = 'red';
  private _defaultBorder = '1rem solid;';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  }

  @Input('changeColor') highlightColor: string;
  @Input('border') border: string;

  @HostListener('mouseenter',['$event']) onMouseEnter(event: Event) {
    console.log(this.highlightColor)
   this._renderer.setStyle(this._el.nativeElement, 'border', this.highlightColor);
    this._renderer.setStyle(this._el.nativeElement, 'border', this._defaultBorder);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
    this._renderer.setStyle(this._el.nativeElement, 'border', this._defaultBorder);
  }


}
