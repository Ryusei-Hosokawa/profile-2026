import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  // Portfolio routes
  route("portfolio", "routes/portfolio._index.tsx"),
  route("portfolio/:slug", "routes/portfolio.$slug.tsx"),
  // Blog routes
  route("blog", "routes/blog._index.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  // Contact route
  route("contact", "routes/contact.tsx"),
  // Contact API
  route("api/contact", "routes/api.contact.ts"),
] satisfies RouteConfig;
