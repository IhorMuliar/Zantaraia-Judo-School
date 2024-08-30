import { client } from "@/sanity/lib/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import GalleryCategory from "./_components/gallery-category";

export const metadata = {
  title: "Фото школи дзюдо",
  description:
    "Перегляньте фото школи дзюдо Георгія Зантарая: яскраві моменти тренувань, змагань та життя нашого клубу в атмосфері дружби та розвитку.",
  openGraph: {
    url: "/gallery",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        alt: "Zantaraia Judo School",
      },
    ],
    type: "website",
    locale: "uk",
  },
  alternates: {
    canonical: "/gallery",
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
  name: "Галерея - Zantaraia Judo School",
  description:
    "Перегляньте фотогалерею Zantaraia Judo School: яскраві моменти тренувань, змагань та життя нашого клубу в атмосфері дружби та розвитку.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
  inLanguage: "uk",
};

export const revalidate = 0;

async function fetchCategories() {
  return await client.fetch(`
    *[_type == "galleryCategory"] | order(title asc) {
      _id,
      title,
      description,
      slug,
      preview {
        asset -> {
          _id,
          url
        }
      }
    }
  `);
}

const Gallery = async () => {
  const categories = await fetchCategories();

  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Галерея" />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {categories.map((category) => (
              <GalleryCategory category={category} key={category._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
