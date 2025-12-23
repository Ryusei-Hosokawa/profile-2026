import type { Route } from "./_types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio 2026 - Ryusei Hosokawa" },
    { name: "description", content: "細川龍生のポートフォリオサイト" },
  ];
}

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio 2026</h1>
        <p className="text-lg text-gray-600">
          React Router v7 + Bun + Tailwind CSS + TypeScript
        </p>
        <p className="mt-4 text-sm text-gray-500">
          プロジェクトのセットアップが完了しました 🎉
        </p>
      </div>
    </div>
  );
}
