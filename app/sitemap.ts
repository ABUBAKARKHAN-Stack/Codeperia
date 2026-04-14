import { BASE_URL } from "@/constants/app.constants";
import { getPortfolioOverview } from "@/helpers/portfolio.helper";
import { getServicesOverview } from "@/helpers/service.helper";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getServicesOverview();
  const portfolio = await getPortfolioOverview();

  return [
    // Home Page sitemap
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    },
    // About Page sitemap
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "yearly",
    },
    // Services Page sitemap
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    // Portfolio Page sitemap
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "yearly",
    },

    // Contact Page sitemap
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "yearly",
    },

    // Dynamic Service Pages
    ...services.map((s: { slug: string; updatedAt?: string }) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Dymainc Portfolio Pages
    ...portfolio.map((p) => ({
      url: `${BASE_URL}/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
