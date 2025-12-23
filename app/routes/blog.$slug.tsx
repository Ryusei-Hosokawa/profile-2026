import type { Route } from "./_types/blog.$slug";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `${params.slug} - Blog` },
    { name: "description", content: "ブログ記事詳細ページ" },
  ];
}

export default function BlogDetail({ params }: Route.ComponentProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Detail</h1>
        <p className="text-gray-600">
          Slug: {params.slug}
        </p>
        <p className="text-gray-600 mt-4">
          ブログ詳細ページ（実装予定）
        </p>
      </div>
    </div>
  );
}
