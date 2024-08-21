import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import GalleryItem from "./_components/gallery-item";
import { GALLERY_ITEMS } from "./_constants";

export const metadata = {
  title: "Галерея",
  description:
    "Перегляньте фотогалерею Zantaraia Judo School: яскраві моменти тренувань, змагань та життя нашого клубу в атмосфері дружби та розвитку.",
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

const Gallery = () => {
  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Галерея" />
      <section className="content-inner">
        <div className="container">
          <div className="row ">
            {GALLERY_ITEMS.map((item, index) => (
              <GalleryItem item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
