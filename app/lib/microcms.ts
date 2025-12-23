import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

export const client = createClient({
  serviceDomain: serviceDomain || '',
  apiKey: apiKey || '',
});

function checkEnvVars() {
  if (!serviceDomain) {
    throw new Error('VITE_MICROCMS_SERVICE_DOMAIN is required');
  }
  if (!apiKey) {
    throw new Error('VITE_MICROCMS_API_KEY is required');
  }
}

// ポートフォリオ一覧取得
export async function getPortfolioList() {
  checkEnvVars();
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
  checkEnvVars();
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
  checkEnvVars();
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
  checkEnvVars();
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
  checkEnvVars();
  const data = await client.get({
    endpoint: 'about',
  });
  return data;
}

// Skills情報取得
export async function getSkills() {
  checkEnvVars();
  const data = await client.get({
    endpoint: 'skills',
  });
  return data;
}

// Career情報取得
export async function getCareer() {
  checkEnvVars();
  const data = await client.get({
    endpoint: 'career',
  });
  return data;
}