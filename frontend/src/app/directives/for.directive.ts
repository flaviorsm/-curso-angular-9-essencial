import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  // 'Em' foi definido no HTML como entrada da diretiva
  @Input('myForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}