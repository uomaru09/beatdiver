# BEATDIVER - 開発手順ガイド

## 前提条件

- Node.js v18 以上（現環境: v22.22.2）
- npm v9 以上（現環境: v11.8.0）

---

## ディレクトリ構成

```
beatdiver/
├── public/
│   └── assets/          ← 画像・フォントなどの静的ファイルを置く
├── src/
│   ├── App.jsx          ← 全セクションのレイアウト
│   ├── index.css        ← グローバルスタイル（Tailwind）
│   └── components/
│       ├── Nav.jsx      ← ナビゲーション
│       ├── Hero.jsx     ← ヒーローセクション
│       ├── Collection.jsx ← 商品一覧
│       ├── Story.jsx    ← ブランドストーリー
│       ├── Lookbook.jsx ← ルックブック
│       ├── Contact.jsx  ← メルマガ登録
│       └── Footer.jsx   ← フッター
├── dist/                ← ビルド後の成果物（自動生成）
├── vite.config.js       ← Vite 設定
└── package.json
```

---

## 1. 画面を確認する（プレビューサーバー起動）

> **この環境では `npm run dev` ではなく `npm run preview` を使います。**  
> （ファイル監視の制限のため、ビルド→プレビューの手順が必要です）

### 手順

**ステップ 1: ビルド**

```bash
cd /config/workspace/beatdiver
npm run build
```

**ステップ 2: プレビューサーバー起動**

```bash
npx vite preview --port 5173 --host
```

**ステップ 3: ブラウザでアクセス**

```
https://uotanik.devserver.idl-sandbox.com/proxy/5173/
```

### 停止方法

ターミナルで `Ctrl + C`

---

## 2. 画像を配置・反映する

### 画像の置き場所

```
public/assets/ ← ここに画像ファイルを置く
```

VS Code のエクスプローラーから `public/assets/` フォルダへドラッグ＆ドロップするだけでOKです。

### JSX での画像参照

`./assets/ファイル名` の形式で参照します。

```jsx
// 例: Hero.jsx でヒーロー画像を使う
<img src="./assets/hero.jpg" alt="hero" />

// 例: Collection.jsx で商品画像を使う
<img src="./assets/product1.jpg" alt="Wave Rider Tee" />
```

### 反映の手順

画像を配置・コードを編集したら、毎回以下を実行します：

```bash
npm run build
```

ブラウザをリロードすると変更が反映されます。

### 対応フォーマット

| フォーマット | 用途 |
|---|---|
| `.jpg` / `.jpeg` | 写真・商品画像 |
| `.png` | 透過が必要な画像・ロゴ |
| `.webp` | 軽量化した写真（推奨） |
| `.svg` | アイコン・ロゴ |

---

## 3. コードを編集して反映する

### 編集の流れ

```
コードを編集・保存
       ↓
npm run build
       ↓
ブラウザをリロード
       ↓
確認
```

### 各ファイルの役割と編集ポイント

| ファイル | 編集する内容 |
|---|---|
| `src/components/Hero.jsx` | キャッチコピー・ボタンテキスト・背景 |
| `src/components/Collection.jsx` | 商品名・価格・カテゴリ・画像 |
| `src/components/Story.jsx` | ブランド説明文・統計数値 |
| `src/components/Lookbook.jsx` | ルックブック画像グリッド |
| `src/components/Contact.jsx` | メルマガの説明文 |
| `src/components/Nav.jsx` | ロゴ・メニュー項目 |
| `src/index.css` | 色・フォント・カスタムスタイル |

### 例: 商品情報を変更する（Collection.jsx）

```jsx
// src/components/Collection.jsx の products 配列を編集
const products = [
  {
    id: 1,
    name: 'WAVE RIDER TEE',   // 商品名
    category: 'T-Shirt',      // カテゴリ
    price: '¥8,800',          // 価格
    badge: 'New',             // バッジ（New / Best / Limited / null）
  },
  // ...
]
```

---

## 4. 本番デプロイ（Cloudflare Pages）

### ビルド

```bash
npm run build
```

`dist/` フォルダが生成されます。

### Cloudflare Pages へのデプロイ

```bash
npx wrangler pages deploy dist --project-name beatdiver
```

または Cloudflare ダッシュボードから `dist/` フォルダをアップロード。

---

## 5. 画像を本番環境（Cloudflare R2）で管理する

開発が進んだら、画像を Cloudflare R2 に移行することで高速配信が可能です。

### R2 にアップロード後の参照方法

```jsx
// public/assets/ の代わりに R2 の URL を使う
<img src="https://pub-xxxxx.r2.dev/hero.jpg" alt="hero" />
```

---

## トラブルシューティング

| 症状 | 原因 | 対処 |
|------|------|------|
| 画像が表示されない | パスが間違っている | `./assets/ファイル名` になっているか確認 |
| 変更が反映されない | ビルドしていない | `npm run build` を実行してリロード |
| ポート 5173 が使用中 | 前のプロセスが残っている | `fuser -k 5173/tcp` を実行してから再起動 |
| 画面が真っ白 | JS エラー | ブラウザの F12 コンソールでエラーを確認 |
| ビルドエラー | コードに構文エラー | ターミナルのエラーメッセージを確認 |
