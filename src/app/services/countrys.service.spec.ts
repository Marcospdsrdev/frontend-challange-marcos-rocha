import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CountrysService } from './countrys.service';

describe('CountrysService', () => {
  let service: CountrysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(CountrysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
