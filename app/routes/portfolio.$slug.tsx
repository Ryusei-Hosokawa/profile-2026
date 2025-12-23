import type { Route } from "./_types/portfolio.$slug";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `${params.slug} - Portfolio` },
    { name: "description", content: "ポートフォリオ詳細ページ" },
  ];
}

export default function PortfolioDetail({ params }: Route.ComponentProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Portfolio Detail</h1>
        <p className="text-gray-600">
          Slug: {params.slug}
        </p>
        <p className="text-gray-600 mt-4">
          ポートフォリオ詳細ページ（実装予定）
        </p>
      </div>
    </div>
  );
}
