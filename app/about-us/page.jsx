import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import AdaptiveSport from "./_components/adaptive-sport";
import Goals from "./_components/goals";
import Training from "./_components/training";
import WorkoutSlider from "./_components/workout-slider";

export const metadata = {
  title: "Про клуб",
  description:
    "Дізнайтеся більше про Zantaraia Judo School: історія клубу, тренерський склад, наші цінності та досягнення.",
  keywords: [
    "Інформація про клуб",
    "Історія дзюдо школи",
    "Тренерський склад",
    "Досягнення клубу",
  ],
  openGraph: {
    url: "/about-us",
  },
  alternates: {
    canonical: "/about-us",
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
  name: "Про клуб - Zantaraia Judo School",
  description:
    "Дізнайтеся більше про Zantaraia Judo School: історія клубу, тренерський склад, наші цінності та досягнення.",
  url: "https://zantaraia-judo-school.pp.ua/about-us",
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
      <section className="content-inner-3">
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

export default AboutUs;
