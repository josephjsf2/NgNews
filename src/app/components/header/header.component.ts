import { CountryOption } from './../../models/country-option.model';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeCountry: string = 'us';
  countries: CountryOption[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // 從 service 中取得前一次 country 資訊
    this.activeCountry = localStorage.getItem('country') || 'us';

    this.countries = this.newsService.getCountries();
  }

  onCountryChanged(code: string): void {
    this.activeCountry = code;
    localStorage.setItem('country', code);
    // TODO: 更新新聞列表
  }

}
