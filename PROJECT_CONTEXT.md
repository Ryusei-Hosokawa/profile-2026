# Portfolio 2026 - プロジェクト概要と経緯

## 📌 プロジェクト基本情報

**プロジェクト名**: Portfolio 2026 - Profile Site Rebuild
**作成者**: 細川龍生 (Ryusei Hosokawa)
**作成日**: 2025-12-23
**目的**: 3年前に作成したポートフォリオサイトを、最新技術スタックで再構築

---

## 🎯 プロジェクト背景

### 旧サイトの状況
- **作成時期**: 2023年（エンジニア転職時）
- **技術**: HTML/CSS/JavaScript + GSAP
- **問題点**:
  - コードが整理されていない
  - 画面によって表示崩れがある
  - メンテナンス性が低い

### 新サイトの目標
3年間のエンジニア経験を活かし、モダンな技術スタックとクリーンなコードで再構築する。

---

## 🛠 技術スタック

### フロントエンド
| 技術 | バージョン | 用途 |
|------|-----------|------|
| React Router | v7 | ルーティング・SSR |
| Bun | 最新 | パッケージ管理・ビルド |
| TypeScript | 5.x | 型安全性 |
| Tailwind CSS | 3.x | スタイリング |
| GSAP | 3.12+ | スクロールアニメーション |
| Lenis | 1.x | スムーススクロール |

### バックエンド/CMS
| 技術 | 用途 |
|------|------|
| microCMS | ヘッドレスCMS（クラウド管理画面） |
| Resend | メール送信（無料プラン） |

### インフラ
| 技術 | 用途 |
|------|------|
| Vercel | ホスティング・デプロイ（無料プラン） |
| GitHub | バージョン管理・CI/CD |

---

## 📐 サイト設計

### サイト構成

#### 1. トップページ (`/`)
- **Hero**: 動画背景 + ネームロゴ
- **About**: 自己紹介（WordPress管理）
- **Portfolio**: ビジュアル表示 + 一覧ページへのボタン
- **Blog**: ビジュアル表示 + 一覧ページへのボタン
- **Contact**: フォームページへのボタン
- **Footer**: SNSリンク・コピーライト

#### 2. Portfolioページ (`/portfolio`)
- 一覧表示（グリッドレイアウト）
- カテゴリフィルター機能
- ソート機能
- microCMS APIからデータ取得

#### 3. Portfolio詳細ページ (`/portfolio/:slug`)
- アイキャッチ画像
- タイトル・説明文
- 使用技術一覧
- 外部リンクボタン
- 隣接投稿への移動ボタン
- 一覧に戻るボタン

#### 4. Blogページ (`/blog`)
- 一覧表示
- microCMS APIからデータ取得

#### 5. Blog詳細ページ (`/blog/:slug`)
- 記事詳細
- microCMS APIからデータ取得

#### 6. Contactページ (`/contact`)
- お問い合わせフォーム（Resend送信）

---

## 🎨 デザイン・UI仕様

### スクロール仕様
- **横スクロール**: Hero → About（PC・タブレット）
- **縦スクロール**: Portfolioセクション以降
- **レスポンシブ**: 画面幅480px以下は全て縦スクロール

### アニメーション
- **スムーススクロール**: Lenis使用
- **スクロールアニメーション**: GSAP ScrollTrigger使用
- **パララックス効果**: 継続実装
- **ガラスモルフィズム**: 継続実装
- **ページ遷移**: Shared Element Transition（React Router v7の`unstable_viewTransition`）
  - Portfolio一覧 → 詳細: カードが画面いっぱいに拡大してから遷移

### ローディング画面
- **0〜23%**: 0.5秒で固定到達
- **23〜100%**: 実際のリソース読み込み進捗に連動
  - microCMS APIデータ取得（+30%）
  - Hero動画読み込み（+25%）
  - 画像読み込み（+20%）
  - フォント読み込み（+2%）

---

## 📊 microCMS設計

### データ管理方針
**microCMS + Vercel構成**
- セキュリティ: microCMSがセキュリティ管理
- コスト: 無料プラン（個人利用は十分）
- 更新フロー: microCMS管理画面で更新 → Webhook → Vercel自動デプロイ
- アクセス: どこからでも管理画面にアクセス可能

### API設計

#### Portfolio API（リスト形式）
- `title` (Text): 作品タイトル
- `slug` (Text): URL用スラッグ
- `thumbnail` (Image): サムネイル画像
- `description` (Rich Editor): 作品説明
- `externalUrl` (Text): 外部リンク
- `techStack` (Multiple Content Reference): 使用技術
- `category` (Multiple Select): カテゴリ（Web開発/Webデザイン/UI・UX）
- `productionYear` (Number): 制作年
- `featured` (Boolean): 注目作品フラグ

#### Blog API（リスト形式）
- `title` (Text): 記事タイトル
- `slug` (Text): URL用スラッグ
- `thumbnail` (Image): アイキャッチ画像
- `content` (Rich Editor): 記事本文
- `excerpt` (Textarea): 抜粋
- `category` (Multiple Select): カテゴリ
- `tags` (Multiple Select): タグ

#### About API（オブジェクト形式）
- `profileImage` (Image): プロフィール画像
- `mainText` (Textarea): 自己紹介文
- `interestText` (Textarea): 興味・関心

#### Skills API（オブジェクト形式）
- `skills` (Repeater Field):
  - `name` (Text): スキル名
  - `category` (Select): Frontend / Backend / Design / Other
  - `level` (Number): 熟練度 (0-100)
  - `icon` (Text): Font Awesomeクラス名

#### Career API（オブジェクト形式）
- `careers` (Repeater Field):
  - `yearMonth` (Date): 年月
  - `company` (Text): 会社名・組織名
  - `position` (Text): 役職
  - `description` (Textarea): 説明

---

## 🔄 開発フロー

### 日常的な更新フロー
```bash
# 1. microCMS管理画面で記事・ポートフォリオ更新
#    https://your-service.microcms.io

# 2. 保存・公開ボタンをクリック

# 3. WebhookでVercelが自動ビルド・デプロイ
#    （Git操作不要）
```

### ディレクトリ構造
```
portfolio-2026/
├── app/                          # React Router v7アプリケーション
│   ├── routes/                   # ルート定義
│   ├── components/               # コンポーネント
│   ├── hooks/                    # カスタムフック
│   ├── lib/                      # ユーティリティ（microCMSクライアント含む）
│   ├── styles/                   # スタイル
│   └── types/                    # 型定義
├── public/                       # 静的ファイル
├── IMAGE&VIDEO/                  # 既存リソース
├── .env                         # 環境変数
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📝 実装フェーズ

### Phase 1: 環境構築
- [x] React Router v7プロジェクト初期化
- [ ] microCMSアカウント作成・API設計
- [ ] 必要なパッケージ導入（microcms-js-sdk）
- [ ] GitHub・Vercel連携

### Phase 2: microCMS側実装
- [ ] Portfolio/Blog/About/Skills/Career APIを作成
- [ ] サンプルコンテンツ投入
- [ ] microCMSクライアント実装（app/lib/microcms.ts）

### Phase 3: 基本レイアウト実装
- [ ] ルーティング設定
- [ ] Header/Footer
- [ ] ローディング画面

### Phase 4: トップページ実装
- [ ] Heroセクション
- [ ] Aboutセクション
- [ ] Portfolio/Blogセクション

### Phase 5: スクロールアニメーション
- [ ] 横スクロール実装
- [ ] 縦スクロール移行
- [ ] パララックス効果

### Phase 6: Portfolio機能
- [ ] 一覧ページ
- [ ] フィルター・ソート
- [ ] 詳細ページ
- [ ] Shared Element Transition

### Phase 7: Blog機能
- [ ] 一覧ページ
- [ ] 詳細ページ

### Phase 8: Contact実装
- [ ] フォーム
- [ ] Resend送信処理

### Phase 9: 最終調整
- [ ] パフォーマンス最適化
- [ ] SEO対策
- [ ] 本番デプロイ

---

## 🔐 セキュリティ・プライバシー

- microCMSがセキュリティ管理を担当
- 環境変数は`.env`で管理（Gitにコミットしない）
- microCMS APIキーは環境変数で管理
- Resend APIキーは環境変数で管理
- CORS設定は不要（microCMSが自動対応）

---

## 📈 今後の拡張性

- ブログ機能の充実（タグ検索、関連記事など）
- ダークモード対応
- 多言語対応（i18n）
- アクセス解析（Google Analytics等）
- コメント機能（オプション）

---

## 📚 参考資料

- React Router v7 公式ドキュメント
- GSAP ScrollTrigger ドキュメント
- Lenis スムーススクロール
- microCMS 公式ドキュメント
- microCMS JavaScript SDK
- Resend API ドキュメント

---

**作成者**: Claude Code + 細川龍生
**最終更新**: 2025-12-23
