import {
  AfterViewInit,
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appClassClone]',
  standalone: true,
})
export class ClassCloneDirective implements OnInit, AfterViewInit {
  @HostBinding('className')
  @Input()
  appClassClone?: string;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  @HostListener('click', ['$event'])
  handleClick(e: MouseEvent): void {
    console.log('directive handles click', e);
  }
}
