import { fetchPosts } from "@/app/(landing)/blog/page";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...(await fetchPosts()).map((post) => ({
      url: `${baseUrl}/${post.slug.current}`,
      lastModified: post.updatedAt,
    })),
  ];
}
