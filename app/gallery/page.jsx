import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import { GALLERY_ITEMS } from './_constants';

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
      <Breadcrumbs parentTitle="Головна" activePage="Галерея"/>
      <section className="content-inner">
        <div className="container">
          <div className="row ">
            {GALLERY_ITEMS.map((item, index) => (
              <div className="col-lg-4 col-sm-6 m-b40" key={index}>
                <div className="dz-box style-2">
                  <div className="dz-media">
                    <Link href={`/gallery/${item.category}`}>
                      <Image
                        src={item.image}
                        width={340}
                        height={250}
                        quality={100}
                        alt={item.title}
                        title={item.title}
                      />
                    </Link>
                  </div>
                  <div className="dz-info">
                    <h4 className="title">
                      <Link href={`/gallery/${item.category}`}>
                        {item.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
