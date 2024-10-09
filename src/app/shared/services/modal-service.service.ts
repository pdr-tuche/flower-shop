import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './template/modal.component.html',
  styleUrl: './template/modal.style.scss',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogComponent {
  matDialogRef = inject(MatDialogRef);
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  matDialog = inject(MatDialog);

  constructor() {}

  openDialog(): Observable<boolean> {
    return this.matDialog.open(DialogComponent).afterClosed();
  }
}
