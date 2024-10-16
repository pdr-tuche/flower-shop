import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { DialogService, ModalDialogData } from '../../../shared/services/modal-service.service';

@Component({
  selector: 'app-catalog-section',
  standalone: true,
  imports: [ButtonComponent],
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

  buttonName = 'More Info';

  modal = inject(DialogService);

  dadosModal: ModalDialogData = {
    title: 'Design feito por Alessa Duarte',
    content: '',
    buttons: [
      {
        title: 'Behance',
        url: "https://www.behance.net/alessaduarte"
      },
      {
        title: 'Linkedin',
        url: "https://www.linkedin.com/in/alessaduarte"
      },    
    ],
  };

  onButtonClick() {
    this.modal.openDialog(this.dadosModal);
  }
}
