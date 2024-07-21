import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
