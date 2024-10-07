import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() name: string;
  @Input() type: string;
  @Input() buttonClass:string = 'primary';

  constructor() {
    this.name = 'Button';
    this.type = 'button';
  }
}
