import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderStyling]'
})
export class BorderStylingDirective implements OnInit {
  @Input('appBorderStyling') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.color) {
      this.renderer.setStyle(this.element.nativeElement, 'border', `2px solid ${this.color}`);
      // this.element.nativeElement.style.border = `2px solid ${this.color}`;
    }
  }
}
