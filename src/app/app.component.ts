import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from './features/sections/home-section/home-section.component';
import { AboutUsSectionComponent } from './features/sections/about-us-section/about-us-section.component';
import { ServicesSectionComponent } from './features/sections/services-section/services-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSectionComponent, AboutUsSectionComponent, ServicesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'flower-shop';
}
