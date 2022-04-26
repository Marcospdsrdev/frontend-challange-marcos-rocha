import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidaysPage } from './holidays.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountrysService } from '../services/countrys.service';

describe('HolidaysPage', () => {
  let component: HolidaysPage;
  let fixture: ComponentFixture<HolidaysPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [CountrysService, ActivatedRoute, { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get(){return 'a'}  } } } }]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a list of holidays', () => {
    expect(component.holidays.length).toBeGreaterThan(0);
  });

});
