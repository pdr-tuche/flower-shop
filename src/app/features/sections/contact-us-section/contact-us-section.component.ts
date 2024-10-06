import { Component, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

interface Contato {
  name: string
  email: string
  message: string
}

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss',
})
export class ContactUsSectionComponent {
  imagem = 'images/annie-spratt-contact-us.png';
  buttonName = 'Enviar';
  buttonType = 'submit';

  contato = input<Contato | null>(null);

  form: FormGroup = new FormGroup({
    name: new FormControl<string>(this.contato()?.name ?? '', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl<string>(this.contato()?.email ?? '', {
      nonNullable: true,
      validators: Validators.required
    }),
    message: new FormControl<string>(this.contato()?.message ?? '', {
      nonNullable: true,
      validators: Validators.required
    }),
  });


  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log('Formulário enviado:', this.form.value);
    alert('Sua mensagem foi enviada com sucesso!');
  }
}
