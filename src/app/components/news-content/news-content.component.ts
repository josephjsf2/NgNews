import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // 訂閱 newsChanged$
  }

  ngOnDestroy(): void {
    // TODO: 取消訂閱
  }
}
