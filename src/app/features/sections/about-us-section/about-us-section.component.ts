import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.scss'
})
export class AboutUsSectionComponent {
  image = 'images/Photo.png';
  logo = 'images/Flower.svg';
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis arcu sit amet tellus auctor tincidunt. Nunc leo nulla, ultrices hendrerit velit ut, vulputate sollicitudin leo. Praesent non elementum nulla. Nunc sem ante, laoreet quis nibh vel, congue ultricies purus. Nunc at nulla a orci tristique semper. Cras risus enim, tincidunt sed nibh eu, lobortis tristique diam. Quisque sed velit non elit egestas consequat non id ex. Vivamus viverra nibh augue, quis vestibulum libero laoreet nec.'
}
