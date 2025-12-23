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