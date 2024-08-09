export default function robots() {
  const baseUrl = "https://zantaraia-judo-school.pp.ua";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}