import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent {
  title = 'Flower Shop';
  background = 'images/annie-spratt-home.png'
}
