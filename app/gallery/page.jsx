import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import GalleryItem from "./_components/gallery-item";
import { GALLERY_ITEMS } from "./_constants";

export const metadata = {
  title: "Галерея",
  description:
    "Перегляньте фотогалерею Zantaraia Judo School: яскраві моменти тренувань, змагань та життя нашого клубу в атмосфері дружби та розвитку.",
  keywords: [
    "Фотогалерея",
    "Моменти тренувань",
    "Змагання дзюдо",
    "Життя клубу",
  ],
  openGraph: {
    url: "/gallery",
  },
  alternates: {
    canonical: "/gallery",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zantaraia Judo School",
  url: "https://zantaraia-judo-school.pp.ua",
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Галерея - Zantaraia Judo School",
  description:
    "Перегляньте фотогалерею Zantaraia Judo School: яскраві моменти тренувань, змагань та життя нашого клубу в атмосфері дружби та розвитку.",
  url: "https://zantaraia-judo-school.pp.ua/gallery",
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
