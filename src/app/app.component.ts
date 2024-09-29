import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from "./features/sections/about-us/about-us.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'flower-shop';
}
