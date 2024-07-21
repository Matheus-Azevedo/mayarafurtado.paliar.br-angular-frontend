import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
