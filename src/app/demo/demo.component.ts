import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassCloneDirective } from '../class-clone.directive';

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ipAddress: string;
}

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ClassCloneDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  compHandler(e: MouseEvent) {
    console.log('component handler');
  }
}
