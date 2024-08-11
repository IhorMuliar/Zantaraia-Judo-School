import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import WorkoutSlider from "@/components/shared/workout-slider";
import GallerySlider from "@/components/gallery/gallery-slider";

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
      <Breadcrumbs activePage="Галерея" parentTitle="Головна" />
      <GallerySlider />
      <section className="content-inner portfolio-wrapper">
        <div className="portfolio-wrapper-inner">
          <div className="container-fluid  p-0">
            <WorkoutSlider />
          </div>
        </div>
        <svg
          className="shape-up"
          width="635"
          height="107"
          viewBox="0 0 635 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M577 0L-16 107L635 45L577 0Z" fill="var(--primary-dark)" />
        </svg>
        <svg
          className="shape-down"
          width="673"
          height="109"
          viewBox="0 0 673 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M682 0L0 56L682 109V0Z" fill="var(--primary)" />
        </svg>
      </section>
    </>
  );
};

export default Gallery;
