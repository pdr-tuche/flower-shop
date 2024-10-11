import { Component, inject, Injectable, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';

export interface ModalDialogButton {
  title: string
  url: string
}

export interface ModalDialogData {
  title: string;
  content: string;
  buttons: ModalDialogButton[];
}

@Component({
  selector: 'app-dialog',
  templateUrl: './template/modal.component.html',
  styleUrl: './template/modal.style.scss',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogComponent {  
  data: ModalDialogData = inject(MAT_DIALOG_DATA);

  goToLink(url: string){
    window.open(url, "_blank");
  }
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  matDialog = inject(MatDialog);

  constructor() {}

  openDialog(data: ModalDialogData): Observable<boolean> {
    return this.matDialog.open(DialogComponent, {data}).afterClosed();
  }
}
