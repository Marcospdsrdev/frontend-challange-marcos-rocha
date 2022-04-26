import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountrysService {
  private headers =  new HttpHeaders({'Content-Type': 'application/json', 'Authorization': "Bearer " + environment.holidays.apiToken});

  constructor(private http: HttpClient) {}

  getCountrys() {

    return this.http.post(`${environment.holidays.apiBaseUrl}${environment.holidays.countriesList}`, {}, {headers: this.headers});
  }

  getHolidays(countryCode:string, year:number) {
    return this.http.post(`${environment.holidays.apiBaseUrl}${environment.holidays.holidaysList}`, {countryCode, year}, {headers: this.headers});
  }
}
