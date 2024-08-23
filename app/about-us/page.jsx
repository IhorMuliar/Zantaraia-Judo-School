import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import AdaptiveSport from "./_components/adaptive-sport";
import Goals from "./_components/goals";
import Training from "./_components/training";
import WorkoutSlider from "./_components/workout-slider";
import ShapeSvg from "./_components/shape-svg";

export const metadata = {
  title: "Про клуб дзюдо",
  description:
    "Дізнайтеся про клуб дзюдо Георгія Зантарая: наші цілі, місію, адаптивний спорт та основні принципи роботи. Більше про наш підхід і те, що робить наш клуб унікальним.",
  openGraph: {
    url: "/about-us",
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
    canonical: "/about-us",
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
  name: "Про клуб - Zantaraia Judo School",
  description:
    "Дізнайтеся більше про Zantaraia Judo School: історія клубу, тренерський склад, наші цінності та досягнення.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
  inLanguage: "uk",
};

const AboutUs = () => {
  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Про клуб" />
      <section
        className="content-inner-2"
        style={{ backgroundImage: "url(/images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="row about-bx2 align-items-center">
            <Goals />
          </div>
        </div>
      </section>
      <section className="content-inner-3 pt-0">
        <div className="container">
          <div className="row about-bx2 align-items-center">
            <AdaptiveSport />
          </div>
        </div>
      </section>
      <section className="content-inner-3 clearfix p-b60">
        <div className="fitness-classes">
          <Training />
        </div>
      </section>
      <section className="content-inner-1 portfolio-wrapper">
        <div className="portfolio-wrapper-inner">
          <div className="container-fluid  p-0">
            <WorkoutSlider />
          </div>
        </div>
        <ShapeSvg
          className="shape-up"
          width="635"
          height="107"
          path="M577 0L-16 107L635 45L577 0Z"
          fill="var(--primary-dark)"
        />
        <ShapeSvg
          className="shape-down"
          width="673"
          height="109"
          path="M682 0L0 56L682 109V0Z"
          fill="var(--primary)"
        />
      </section>
    </>
  );
};

export default AboutUs;
