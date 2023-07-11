Wild oasis web
==

用React、React Query、vite、supabase完成的專案 
##  Overview 介紹
[DEMO](https://weilocus.github.io/wild-oasis-web/)

為飯店內部人員使用的網頁，登入後可以在首頁查看數據，並有訂單、房型、註冊user、基本設定的頁面，來做管理
- light mode
![UI-light](./public/image/demo_home%20page.png)
- dark mode
![UI-dark](./public/image/demo_home%20page%20dark.png)

### Features 專案功能
#### 登入
![login](./public/image/demo_login%20page.png)
登入帳號 : user1@example.com
密碼 : 00000000

登入後進入首頁，使用者可以點擊右上角 sun / moon icon，切換深淺色模式

#### supabase 
使用supabase做資料庫建置

#### 修改資料
點擊右上角的人物icon
- 使用者可以修改名稱、頭像
![update user data](./public/image/demo_update%20name%20and%20avatar.gif)
- 使用者可以變更密碼

#### Dashboard 
- 查看銷售額、額外早餐銷售、入住日統計
- 提供最近7天、30天和90天的數據
![filter data](./public/image/demo_filter%20data.gif)
- 在Today Activity區塊可以查看當天入住和退房的名單
- 點擊check in 可以連結到訂單詳情頁面

#### Bookings page
![booking page](./public/image/demo_booking%20data.png)
- 使用者可以透過訂單狀態做篩選
- 使用者可以根據日期和金額來排序
- 根據訂單狀態，使用者可以點擊icon對單筆訂單做更多操作：檢視、刪除、編輯
- 譬如：狀態為 unconfirmed，可以變更為check in 
![check in booking](./public/image/demo_check%20in%20booking.gif)

#### cabin page
![cabin page](./public/image/demo_cabin%20page.png)
- 使用者可以新增新的房型、金額、折扣等資料
- 點擊icon可以針對單個房型做複製、編輯、刪除等動作
- 使用者可以編輯表單
![edit cabin](./public/image/demo_edit%20cabin.gif)

#### Users page
- 使用者可以在此頁註冊新的使用者

#### Settings page
- 用來修改基本設定：最小預定數、最大預定數、最多可預訂客人、早餐金額


###  Getting Started 開始使用

⚠️ **請先確認電腦中已安裝 node.js 與 npm！**

1. 將專案 clone 到本地：

```bash
$ git clone "https://github.com/WeiLocus/wild-oasis-web.git"
```

2. 在本地開啟之後，透過終端機進入資料夾，輸入：

```bash
$ npm install
```

3. 安裝完畢後，繼續輸入：

```bash
$ npm run dev
```

4. 若要暫停使用，可在終端機輸入以下指令：

```bash
ctrl/Command + c
```

### 💻 Technologies 開發環境與工具

- node.js 
- vite 
- react
- react-dom 
- react-route
- react-query
- react-icons
- styled-components
- react-hook-form
- react-hot-toast
- supabase
- recharts
- react-error-boundary
- eslint

### 📦 File Structure 專案結構

```
-- public
  |__ images
-- src
  |__ app.jsx
  |__ main.jsx
  |__ context
  |__ data
  |__ feature
    |__ authentication
    |__ bookings
    |__ cabins
    |__ check-in-out
    |__ dashboard
    |__ settings
  |__ hooks
  |__ pages
  |__ services
  |__ utils
  |__ ui
```
#### design by Jonas 