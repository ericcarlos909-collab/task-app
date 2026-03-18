import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    console.log('Clique capturado!');
    // Alterna a classe CSS no elemento
    const elemento = this.el.nativeElement;
    elemento.classList.toggle('tarefa-destacada');
  }
}
