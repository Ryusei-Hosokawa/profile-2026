import { getPortfolioList } from "~/lib/microcms";
import type { Route } from "./+types/portfolio._index";

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
            <a key={item.id} href={`/portfolio/${item.slug}`} className="group">
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
