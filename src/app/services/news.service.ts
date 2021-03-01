import { QueryParams } from './../models/query-params.model';
import { HeadlineResponse } from './../models/headline-response.model';
import { CountryOption } from './../models/country-option.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { News } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = 'https://newsapi.org/v2/top-headlines';

  queryParam: QueryParams = {
    country: 'us',
    category: 'Business',
    q: '',
    pageSize: 100,
    apiKey: '5c272dc78f954b94855e059b7e2dabc2'
  };

  constructor(private http: HttpClient) { }

  /**
   * 取得 News API Observable
   */
  getNewsData(): Observable<any> {
    return this.http.get<HeadlineResponse>(`${this.apiUrl}?country=${this.queryParam.country}&category=${this.queryParam.category}&q=${this.queryParam.q}&apiKey=${this.queryParam.apiKey}&pageSize=${this.queryParam.pageSize}`);
  }

  /**
   * 更新API 查詢參數
   * @param params 欲更新參數
   */
  updateQueryParam(params: QueryParams): void {
    this.queryParam = { ...this.queryParam, ...params };
  }

  /**
   * 取得類別
   */
  getCategories(): string[] {
    return ['Business', 'Entertainment', 'General', 'Healthy', 'Science', 'Sports', 'Technology'];
  }

  /**
   * 取得國家代碼清單
   */
  getCountries(): CountryOption[] {
    return [
      { code: 'ar', name: 'Argentina' },
      { code: 'au', name: 'Australia' },
      { code: 'at', name: 'Austria' },
      { code: 'be', name: 'Belgium' },
      { code: 'br', name: 'Brazil' },
      { code: 'bg', name: 'Bulgaria' },
      { code: 'ca', name: 'Canada' },
      { code: 'cn', name: 'China' },
      { code: 'co', name: 'Colombia' },
      { code: 'cu', name: 'Cuba' },
      { code: 'cz', name: 'Czech Republic' },
      { code: 'eg', name: 'Egypt' },
      { code: 'fr', name: 'France' },
      { code: 'de', name: 'Germany' },
      { code: 'gr', name: 'Greece' },
      { code: 'hk', name: 'Hong Kong' },
      { code: 'hu', name: 'Hungary' },
      { code: 'in', name: 'India' },
      { code: 'id', name: 'Indonesia' },
      { code: 'ie', name: 'Ireland' },
      { code: 'il', name: 'Israel' },
      { code: 'it', name: 'Italy' },
      { code: 'jp', name: 'Japan' },
      { code: 'lv', name: 'Latvia' },
      { code: 'lt', name: 'Lithuania' },
      { code: 'my', name: 'Malaysia' },
      { code: 'mx', name: 'Mexico' },
      { code: 'ma', name: 'Morocco' },
      { code: 'nl', name: 'Netherlands' },
      { code: 'nz', name: 'New Zealand' },
      { code: 'ng', name: 'Nigeria' },
      { code: 'no', name: 'Norway' },
      { code: 'ph', name: 'Philippines' },
      { code: 'pl', name: 'Poland' },
      { code: 'pt', name: 'Portugal' },
      { code: 'ro', name: 'Romania' },
      { code: 'ru', name: 'Russia' },
      { code: 'sa', name: 'Saudi Arabia' },
      { code: 'rs', name: 'Serbia' },
      { code: 'sg', name: 'Singapore' },
      { code: 'sk', name: 'Slovakia' },
      { code: 'si', name: 'Slovenia' },
      { code: 'za', name: 'South Africa' },
      { code: 'kr', name: 'South Korea' },
      { code: 'se', name: 'Sweden' },
      { code: 'ch', name: 'Switzerland' },
      { code: 'tw', name: 'Taiwan' },
      { code: 'th', name: 'Thailand' },
      { code: 'tr', name: 'Turkey' },
      { code: 'ae', name: 'UAE' },
      { code: 'ua', name: 'Ukraine' },
      { code: 'gb', name: 'United Kingdom' },
      { code: 'us', name: 'United States' },
      { code: 've', name: 'Venuzuela' }
    ];
  }
}
