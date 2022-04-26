import { CountrysService } from './../services/countrys.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule ],
      providers: [CountrysService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a list of countries', () => {
    expect(component.countries.length).toBeGreaterThan(0);
  });
  it('should have a list of filtered countries', () => {
    expect(component.filterCountries.length).toBeGreaterThan(0);
  });
  it('should filter countries', () => {
    component.onSearchChange({target: {value: 'a'}});
    expect(component.filterCountries.length).toBeGreaterThan(0);
  });
  it('should navigate to holidays page', () => {
    component.goToHolidays('a');
    expect(component.router.url).toBe('/holidays/a');
  });
});
