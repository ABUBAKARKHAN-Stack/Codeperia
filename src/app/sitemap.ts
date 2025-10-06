import { baseUrl } from '@/constants/constants'
import { getPosts } from '@/helpers/blogs.helper'
import { getServices } from '@/helpers/services.helper'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const services = await getServices()
    const blogs = await getPosts()

    return [
        // Home Page sitemap
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            priority: 1,
            changeFrequency: "daily"
        },
        // About Page sitemap
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            priority: 0.6,
            changeFrequency: "yearly"
        },
        // Services Page sitemap
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: "monthly"
        },
        // Portfolio Page sitemap
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            priority: 0.7,
            changeFrequency: "yearly"
        },
        // Blog Page sitemap
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            priority: 0.9,
            changeFrequency: "weekly"
        },
        // Contact Page sitemap
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.5,
            changeFrequency: "yearly"
        },

        // Dynamic Service Pages
        ...services.map((s: { slug: string; updatedAt?: string }) => ({
            url: `${baseUrl}/services/${s.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),

        // Dynamic Blog Pages
        ...blogs.map((b: { slug: string; updatedAt?: string }) => ({
            url: `${baseUrl}/blog/${b.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        })),
    ]
}
