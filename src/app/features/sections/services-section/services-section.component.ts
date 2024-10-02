import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  services = [
    {
      icon: 'images/Truck.svg',
      description: 'Fast delivery',
    },
    {
      icon: 'images/Rose.svg',
      description: 'Custom Arrangements',
    },
    {
      icon: 'images/Event.svg',
      description: 'Events and Workshops',
    },
  ];
}
