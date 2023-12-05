import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfClone]',
  standalone: true,
})
export class IfCloneDirective {
  private isApplied = false;

  @Input()
  set appIfClone(predicate: boolean) {
    if (!this.isApplied && predicate) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isApplied = true;
    } else if (this.isApplied) {
      this.viewContainerRef.clear();
      this.isApplied = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
