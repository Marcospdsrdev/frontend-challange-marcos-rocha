import { Router } from '@angular/router';
import { CountrysService } from './../services/countrys.service';
import { Component } from '@angular/core';
import { ICountrysListResp } from '../services/countriesListResp.interface';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public countries= [];
  public filterCountries = [];

  constructor(private countriesService: CountrysService, public router: Router , private loadingController: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();
    this.countriesService.getCountrys().subscribe((res: ICountrysListResp) => {
      this.countries = res.countries;
      this.filterCountries = this.countries;
      loading.dismiss();
    });
  }

  goToHolidays(countryCode: string) {
    this.router.navigate(['/holidays', countryCode]);
  }

  onSearchChange(event) {
    const searchTerm = event.target.value;

    if (searchTerm && searchTerm.trim() !== '') {
      this.filterCountries = this.countries.filter((item) => {
        return (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });
    } else {
      this.filterCountries = this.countries;
    }
  }
}
