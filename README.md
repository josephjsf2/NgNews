```

run 'npm install' to install dependencies.

run 'npm start' to start project.

```
更改 environment.ts中 apiKey

### Main Component
1. 透過 DI注入 NewsService
2. 透過 getCategory取得類別
3. 透過 ngFor呈現類別資訊
4. 透過 click事件紀錄目前選項
5. 使用 [class.is-active]="true/false" attribute binding來決定 element 是否套用 class

### News-List
1. 將 news資料呈現至畫面上
2. 記錄目前選取資料 index，預設為第一筆資料
3. 透過 click 事件記錄目前 index(ngFor 中可取得目前資料 index => *ngFor="let item of items; let i = index")
4. 被選取項目套用 class has-background-primary 與 has-text-white-bis

### News-Content
1. 從 NewsList中透過 newsChangedSubject.next方法送出資料
2. 從 NewsContent中訂閱 newsChanged$
3. 套用 NewsContent版型
4. 使用 publishAt pipe

### 透過 Subject 觸發 News-List抓取資料
1. NewsService updateParamData中發送 next 
2. Header component中使用 newsService.updateParamData
3. Main component中使用 newsService.updateParamData
4. News-List component關鍵自查詢使用 newsService.updateParamData
5. News-List 訂閱與取消訂閱
