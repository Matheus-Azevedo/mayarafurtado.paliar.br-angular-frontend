import { HomeComponent } from './components/home/home.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'mayarafurtado.paliar.br-angular-frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mayarafurtado.paliar.br-angular-frontend');
  });

  it('should render the HomeComponent within the section with id="home"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const homeSection = compiled.querySelector('#home');
    expect(homeSection).toBeTruthy();
    const HomeComponent = homeSection?.querySelector('app-home');
    expect(HomeComponent).toBeTruthy();
  });

  it('should render the BiographyComponent within the section with id="biography"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const biographySection = compiled.querySelector('#biography');
    expect(biographySection).toBeTruthy();
    const biographyComponent = biographySection?.querySelector('app-biography');
    expect(biographyComponent).toBeTruthy();
  });

  it('should render the ClinicComponent within the section with id="clinic"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const clinicSection = compiled.querySelector('#clinic');
    expect(clinicSection).toBeTruthy();
    const clinicComponent = clinicSection?.querySelector('app-clinic');
    expect(clinicComponent).toBeTruthy();
  });

  it('should render the DepositionsComponent within the section with id="depositions"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const depositionsSection = compiled.querySelector('#depositions');
    expect(depositionsSection).toBeTruthy();
    const depositionsComponent =
      depositionsSection?.querySelector('app-depositions');
    expect(depositionsComponent).toBeTruthy();
  });

  it('should render the ContactsComponent within the section with id="contacts"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const contactsSection = compiled.querySelector('#contacts');
    expect(contactsSection).toBeTruthy();
    const contactsComponent = contactsSection?.querySelector('app-contacts');
    expect(contactsComponent).toBeTruthy();
  });
});
