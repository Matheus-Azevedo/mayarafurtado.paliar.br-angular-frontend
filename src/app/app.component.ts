import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { DepositionsComponent } from './components/depositions/depositions.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    BiographyComponent,
    ClinicComponent,
    DepositionsComponent,
    ContactsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mayarafurtado.paliar.br-angular-frontend';
}
