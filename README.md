# Microsoft Build with CCU 2026

由 **Microsoft** 與 **.NET Foundation** 共同舉辦，於國立中正大學 (CCU) 舉行的技術之夜活動官方網站。

## 活動資訊

- **時間**：17:00 – 21:00
- **地點**：國立中正大學
- **費用**：免費入場（含 Pizza、飲料、Costco 點心）

### 議程

| 時間 | 內容 |
| --- | --- |
| 17:00 – 17:30 | 入場 + 開場 + 微軟 Build 開幕影片 |
| 17:30 – 18:30 | Daniel｜微軟台灣工程師 |
| 18:30 – 19:30 | 林暐翰｜.NET 專案維護者、Microsoft MVP |
| 19:30 – 20:30 | 謝政廷｜台積電副理、Microsoft MVP、GitHub Star |
| 20:30 – 21:00 | 結尾 |

## 技術

- 純靜態網頁，無建置流程
- [Tailwind CSS](https://tailwindcss.com/)（CDN）
- Google Fonts (Inter + Noto Sans TC)
- 響應式 (mobile-first)、深色主題

## 本地預覽

直接用瀏覽器開啟 `index.html`，或啟動任意靜態伺服器：

活動橫幅可直接開啟 `banner.html` 預覽。頁面已設定為 **600cm × 70cm** 比例與列印尺寸，瀏覽器列印成 PDF 時可使用自訂紙張大小 `600cm × 70cm`、邊界 `0`。

```powershell
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

## 部署到 GitHub Pages

1. 將此 repo 推送到 GitHub。
2. 進入 `Settings` → `Pages`。
3. **Source** 選擇 `Deploy from a branch`，**Branch** 選 `main` / 根目錄 (`/`)。
4. 儲存後等待 1–2 分鐘，網站即會發佈於 `https://<user>.github.io/2026_tw_ms_build_with_ccu/`。

> 已包含 `.nojekyll`，確保 GitHub Pages 不會跳過底線開頭的檔案 / 資料夾。

## 結構

```
.
├── index.html              # 主頁
├── banner.html             # 600cm × 70cm 活動橫幅
├── assets/
│   └── css/style.css       # 額外樣式
│   └── css/banner.css      # 橫幅樣式
├── .nojekyll               # 停用 Jekyll 處理
└── README.md
```

## License

活動內容版權歸主辦單位。網站原始碼採 MIT License 釋出。
