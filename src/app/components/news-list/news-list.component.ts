import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {

  keyword = '';
  keywordChangedSubject: Subject<string> = new Subject();
  keywordChanged$: Observable<string> = this.keywordChangedSubject.asObservable();
  keywordSubscription?: Subscription;

  constructor() { }

  ngOnInit(): void {


    // 等待 keyword 事件
    this.keywordSubscription = this.keywordChanged$.subscribe(keyword => {
      // TODO: 輸入停止一秒後才抓資料
      console.log('Received new keyword:', keyword)
      this.reloadNewsList();
    });
  }

  ngOnDestroy(): void {
    this.keywordSubscription?.unsubscribe();
  }

  reloadNewsList(): void {
    // TODO: 自 newsService 中取得新聞資料
  }

  onKeywordChanged(keyword: string): void {
    this.keywordChangedSubject.next(keyword);
  }

}
