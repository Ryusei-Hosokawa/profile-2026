# Portfolio 2026 - Ryusei Hosokawa

モダンな技術スタックで構築したポートフォリオサイト

## 🚀 技術スタック

- **React Router v7**: ルーティング・SSR
- **Bun**: パッケージ管理・ビルドツール
- **TypeScript**: 型安全性
- **Tailwind CSS**: スタイリング
- **GSAP**: スクロールアニメーション
- **Lenis**: スムーススクロール
- **microCMS**: ヘッドレスCMS（クラウド管理画面）
- **Resend**: メール送信
- **Vercel**: ホスティング

## 📁 プロジェクト構成

```
portfolio-2026/
├── app/                  # React Router v7アプリケーション
├── public/               # 静的ファイル
└── IMAGE&VIDEO/          # 既存リソース
```

## 🛠 セットアップ

### 1. 依存関係のインストール

```bash
bun install
```

### 2. 環境変数の設定

`.env`ファイルを作成：

```bash
cp .env.example .env
```

環境変数を設定：
```
VITE_MICROCMS_SERVICE_DOMAIN=your-service-domain
VITE_MICROCMS_API_KEY=your-microcms-api-key
RESEND_API_KEY=your_resend_api_key
```

### 3. microCMSのセットアップ

詳細は[MICROCMS_SETUP.md](./MICROCMS_SETUP.md)を参照。

### 4. 開発サーバー起動

```bash
bun run dev
```

http://localhost:5173 でアクセス可能。

## 📝 開発フロー

### コンテンツ更新

```bash
# 1. microCMS管理画面で記事を更新
#    https://your-service.microcms.io

# 2. 保存・公開ボタンをクリック

# 3. WebhookでVercelが自動デプロイ
#    （Git操作不要）
```

### ビルド

```bash
bun run build
```

### 本番環境

Vercelが自動でビルド・デプロイします。

## 📚 ドキュメント

- [プロジェクト概要・経緯](./PROJECT_CONTEXT.md)
- [microCMS環境セットアップ](./MICROCMS_SETUP.md)

## 🎨 デザイン仕様

- 横スクロール（Hero → About）
- 縦スクロール（Portfolioセクション以降）
- パララックス効果
- Shared Element Transition（ページ遷移）

## 📄 ライセンス

© 2025 Ryusei Hosokawa
