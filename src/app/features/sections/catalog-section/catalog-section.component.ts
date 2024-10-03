import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-section',
  standalone: true,
  imports: [],
  templateUrl: './catalog-section.component.html',
  styleUrl: './catalog-section.component.scss',
})
export class CatalogSectionComponent {
  catalog = [
    {
      product: 'Scarlet Symphony',
      price: 30.0,
      image: 'images/Photo - 1.png',
    },
    {
      product: 'Azure Serenade',
      price: 35.0,
      image: 'images/Photo - 2.png',
    },
    {
      product: 'Rosy Blossoms',
      price: 50.0,
      image: 'images/Photo - 3.png',
    },
    {
      product: 'Spring Bouquet',
      price: 70.0,
      image: 'images/Photo - 4.png',
    },
  ];
}
