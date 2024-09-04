import { client } from "@/sanity/lib/client";
import JsonLd from "@/components/shared/json-ld";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import BlogPostCard from "./_components/blog-post-card";

export const revalidate = 0;

export const metadata = {
  title: "Новини школи дзюдо",
  description:
    "Новини школи дзюдо Георгія Зантарая: події, змагання, майстер-класи та інші актуальні новини про розвиток дзюдо в Україні та світі.",
  openGraph: {
    url: "/blog",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-news.jpg`,
        alt: "Zantaraia Judo School",
      },
    ],
    type: "website",
    locale: "uk",
  },
  alternates: {
    canonical: "/blog",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zantaraia Judo School",
  alternateName: "Школа Георгія Зантарая",
  url: process.env.NEXT_PUBLIC_SITE_URL,
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Новини школи дзюдо",
  description:
    "Новини школи дзюдо Георгія Зантарая: події, змагання, майстер-класи та інші актуальні новини про розвиток дзюдо в Україні та світі.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  inLanguage: "uk",
};

export async function fetchPosts() {
  const query = `
    *[_type == "blogPost"] | order(title asc) {
      title,
      releaseDate,
      description,
      slug,
      "updatedAt": _updatedAt,
      preview {
        asset -> {
          _id,
          url
        }
      }
    }
  `;

  return client.fetch(query);
}

const Blog = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Новини" />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <BlogPostCard post={post} key={post.slug.current} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
