import { IHolidaysListResp } from './../services/countriesListResp.interface';
import { CountrysService } from './../services/countrys.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {

  public holidays = [];

  constructor(private router: ActivatedRoute, private countrysService: CountrysService, private loadingController: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();
    const year = new Date().getFullYear();
    this.router.params.subscribe(params => {
      this.countrysService.getHolidays(params.id, year).subscribe((res: IHolidaysListResp) => {
        this.holidays = res.holidays;
        loading.dismiss();
      });
    });
  }
}
