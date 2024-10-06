import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss',
})
export class ContactUsSectionComponent {
  imagem = 'images/annie-spratt-contact-us.png';
  buttonName = 'Enviar';
  buttonType = 'submit';

  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Formulário enviado:', this.contact);
      alert('Sua mensagem foi enviada com sucesso!');
      this.contact = { name: '', email: '', message: '' }; // Limpar o formulário
    }
  }
}
