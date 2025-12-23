import type { Route } from "./_types/blog._index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Ryusei Hosokawa" },
    { name: "description", content: "ブログ記事一覧" },
  ];
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-gray-600">
          ブログ一覧ページ（実装予定）
        </p>
      </div>
    </div>
  );
}
