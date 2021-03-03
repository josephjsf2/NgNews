import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  reloadNewsList(): void {
    // TODO: 自 newsService 中取得新聞資料
  }


}
