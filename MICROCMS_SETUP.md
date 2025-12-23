# microCMS 環境セットアップ手順書

このドキュメントでは、microCMSアカウントの作成から、React Router v7プロジェクトとの連携までを解説します。

---

## 📋 目次

1. [microCMSアカウント作成](#1-microcmsアカウント作成)
2. [サービスの作成](#2-サービスの作成)
3. [APIの作成](#3-apiの作成)
4. [React Routerとの連携](#4-react-routerとの連携)
5. [Vercel Webhook設定](#5-vercel-webhook設定)

---

## 1. microCMSアカウント作成

### 1.1 アカウント登録

1. **microCMS公式サイトにアクセス**
   - URL: https://microcms.io/
   - 「無料で始める」をクリック

2. **アカウント情報を入力**
   - メールアドレス
   - パスワード
   - または、GitHub/Googleアカウントで登録

3. **メール認証**
   - 登録メールアドレスに届いた認証リンクをクリック

---

## 2. サービスの作成

### 2.1 新規サービス作成

1. **ダッシュボードで「新規作成」**
   - サービス名: `portfolio-2026`（任意）
   - サービスID: `portfolio-2026`（URLに使用される）

2. **プランの選択**
   - **Hobbyプラン（無料）**を選択
   - API呼び出し: 50,000回/月
   - 画像容量: 10GB/月

---

## 3. APIの作成

### 3.1 Portfolio API

```
API名: portfolio
エンドポイント: /portfolio
APIの型: リスト形式
```

**フィールド設定:**

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| `title` | タイトル | テキストフィールド | ✅ | 作品タイトル |
| `slug` | スラッグ | テキストフィールド | ✅ | URL用（例: project-001） |
| `thumbnail` | サムネイル | 画像 | ✅ | アイキャッチ画像 |
| `description` | 説明 | リッチエディタ | ✅ | 作品の詳細説明 |
| `externalUrl` | 外部URL | テキストフィールド | - | 作品の公開URL |
| `techStack` | 使用技術 | 複数コンテンツ参照 | - | 技術スタック一覧 |
| `category` | カテゴリ | 複数選択 | ✅ | Web開発/Webデザイン/UI・UX |
| `productionYear` | 制作年 | 数値 | ✅ | 制作した年 |
| `featured` | 注目作品 | 真偽値 | - | トップページ表示用 |

**カテゴリの選択肢:**
- `web-development`: Web開発
- `web-design`: Webデザイン
- `ui-ux`: UI・UX
- `other`: その他

---

### 3.2 Blog API

```
API名: blog
エンドポイント: /blog
APIの型: リスト形式
```

**フィールド設定:**

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| `title` | タイトル | テキストフィールド | ✅ | 記事タイトル |
| `slug` | スラッグ | テキストフィールド | ✅ | URL用 |
| `thumbnail` | アイキャッチ | 画像 | - | 記事画像 |
| `content` | 本文 | リッチエディタ | ✅ | 記事本文 |
| `excerpt` | 抜粋 | テキストエリア | - | 記事の要約 |
| `category` | カテゴリ | 複数選択 | - | 技術/デザイン/その他 |
| `tags` | タグ | 複数選択 | - | 記事タグ |

---

### 3.3 About API（オブジェクト形式）

```
API名: about
エンドポイント: /about
APIの型: オブジェクト形式
```

**フィールド設定:**

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| `profileImage` | プロフィール画像 | 画像 | ✅ | 顔写真 |
| `mainText` | 自己紹介文 | テキストエリア | ✅ | メイン紹介文 |
| `interestText` | 興味・関心 | テキストエリア | - | 関心事 |

---

### 3.4 Skills API（オブジェクト形式）

```
API名: skills
エンドポイント: /skills
APIの型: オブジェクト形式
```

**フィールド設定:**

| フィールドID | 表示名 | 種類 | 必須 |
|-------------|--------|------|------|
| `skills` | スキル一覧 | 繰り返しフィールド | ✅ |

**繰り返しフィールドの内容:**
- `name`: スキル名（テキスト）
- `category`: カテゴリ（Frontend/Backend/Design/Other）
- `level`: 熟練度（数値 0-100）
- `icon`: アイコン（テキスト: Font Awesomeクラス名）

---

### 3.5 Career API（オブジェクト形式）

```
API名: career
エンドポイント: /career
APIの型: オブジェクト形式
```

**フィールド設定:**

| フィールドID | 表示名 | 種類 | 必須 |
|-------------|--------|------|------|
| `careers` | 経歴一覧 | 繰り返しフィールド | ✅ |

**繰り返しフィールドの内容:**
- `yearMonth`: 年月（日時）
- `company`: 会社名（テキスト）
- `position`: 役職（テキスト）
- `description`: 説明（テキストエリア）

---

## 4. React Routerとの連携

### 4.1 環境変数の設定

プロジェクトルートに`.env`ファイルを作成：

```bash
# microCMS API設定
VITE_MICROCMS_SERVICE_DOMAIN=your-service-domain
VITE_MICROCMS_API_KEY=your-api-key

# Resend API Key (for contact form)
RESEND_API_KEY=your_resend_api_key_here
```

**取得方法:**
- `VITE_MICROCMS_SERVICE_DOMAIN`: microCMSダッシュボード → サービスID
- `VITE_MICROCMS_API_KEY`: microCMSダッシュボード → API設定 → APIキー

---

### 4.2 microCMS SDKのインストール

```bash
bun add microcms-js-sdk
```

---

### 4.3 microCMSクライアントの作成

`app/lib/microcms.ts`を作成：

```typescript
import { createClient } from 'microcms-js-sdk';

if (!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('VITE_MICROCMS_SERVICE_DOMAIN is required');
}

if (!import.meta.env.VITE_MICROCMS_API_KEY) {
  throw new Error('VITE_MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

// ポートフォリオ一覧取得
export async function getPortfolioList() {
  const data = await client.get({
    endpoint: 'portfolio',
    queries: {
      orders: '-publishedAt',
      limit: 100,
    },
  });
  return data.contents;
}

// ポートフォリオ詳細取得
export async function getPortfolioBySlug(slug: string) {
  const data = await client.get({
    endpoint: 'portfolio',
    queries: {
      filters: `slug[equals]${slug}`,
    },
  });
  return data.contents[0];
}

// ブログ一覧取得
export async function getBlogList() {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt',
      limit: 100,
    },
  });
  return data.contents;
}

// ブログ詳細取得
export async function getBlogBySlug(slug: string) {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `slug[equals]${slug}`,
    },
  });
  return data.contents[0];
}

// About情報取得
export async function getAbout() {
  const data = await client.get({
    endpoint: 'about',
  });
  return data;
}

// Skills情報取得
export async function getSkills() {
  const data = await client.get({
    endpoint: 'skills',
  });
  return data;
}

// Career情報取得
export async function getCareer() {
  const data = await client.get({
    endpoint: 'career',
  });
  return data;
}
```

---

### 4.4 ルートでのデータ取得

`app/routes/portfolio._index.tsx`の例：

```typescript
import type { Route } from "./+types/portfolio._index";
import { getPortfolioList } from "~/lib/microcms";

export async function loader({}: Route.LoaderArgs) {
  const portfolios = await getPortfolioList();
  return { portfolios };
}

export default function PortfolioIndex({ loaderData }: Route.ComponentProps) {
  const { portfolios } = loaderData;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((item) => (
            <a
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group"
            >
              <img
                src={item.thumbnail.url}
                alt={item.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <h2 className="mt-4 text-xl font-semibold group-hover:text-blue-600">
                {item.title}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## 5. Vercel Webhook設定

### 5.1 Vercel Deploy Hookの作成

1. **Vercelダッシュボード**にアクセス
2. プロジェクトを選択
3. **Settings** → **Git** → **Deploy Hooks**
4. 「Create Hook」をクリック
   - Hook Name: `microCMS Update`
   - Branch: `main`
5. 生成されたURLをコピー

---

### 5.2 microCMSにWebhook設定

1. **microCMSダッシュボード**
2. **API設定** → **Webhook**
3. 「追加」をクリック
4. 以下を設定：
   - Webhook名: `Vercel Deploy`
   - URL: 先ほどコピーしたVercel Deploy Hook URL
   - トリガー: `コンテンツの公開時`、`コンテンツの更新時`、`コンテンツの削除時`
5. 保存

**これで、microCMSでコンテンツを更新するたびにVercelが自動でデプロイされます。**

---

## 🔧 トラブルシューティング

### APIキーが認識されない

1. `.env`ファイルがプロジェクトルートに存在するか確認
2. 環境変数名が`VITE_`で始まっているか確認（Viteの仕様）
3. 開発サーバーを再起動

### CORS エラーが発生する

microCMSは自動的にCORSを許可するため、通常は発生しません。
もし発生した場合は、APIキーが正しいか確認してください。

### 画像が表示されない

microCMSの画像URLは以下の形式です：
```
https://images.microcms-assets.io/assets/...
```

画像フィールドのレスポンスは以下の構造です：
```typescript
{
  url: string;
  width: number;
  height: number;
}
```

---

## 📚 参考リンク

- [microCMS公式ドキュメント](https://document.microcms.io/)
- [microCMS JavaScript SDK](https://github.com/microcmsio/microcms-js-sdk)
- [Vercel Deploy Hooks](https://vercel.com/docs/concepts/git/deploy-hooks)

---

**作成日**: 2025-12-24
**最終更新**: 2025-12-24
