import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'demo-apend-demo',
  templateUrl: './apend-demo.component.html',
  styleUrls: ['./apend-demo.component.css']
})
export class ApendDemoComponent  {

  @ViewChild('el')
  private el: ElementRef;
  constructor(private renderer: Renderer2) {
  }

  onClick() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.el.nativeElement, li);
  }
}
