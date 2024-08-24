import Image from "next/image";

import JsonLd from "@/components/shared/json-ld";
import AboutDetails from "./_home/components/about-details";
import ContactInfo from "./_home/components/contact-info";
import Portfolio from "./_home/components/portfolio";
import Testimonial from "./_home/components/testimonial";
import Advantages from "./_home/components/advantages";
import InfoCards from "./_home/components/info-cards";

import mainBannerImage from "@/public/images/gym.jpg";
import zantaraiaImage from "@/public/images/zantaraia.png";

export const metadata = {
  title: {
    absolute: "Школа дзюдо - Zantaraia Judo School",
  },
  description:
    "Школа дзюдо Георгія Зантарая - ознайомтеся з нашими тренуваннями, досвідченими тренерами та спортивними досягненнями.  Дзюдо для дітей та підлітків: фізичний розвиток, підготовка до змагань, дружня атмосфера!",
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Zantaraia Judo School",
  sport: "Judo",
  url: "https://zantaraia-judo-school.pp.ua",
  logo: "https://zantaraia-judo-school.pp.ua/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Василя Липківського, 36",
    addressLocality: "Київ",
    addressRegion: "Київ",
    postalCode: "0200",
    addressCountry: "UA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+380931517748",
    contactType: "Customer Service",
    areaServed: "UA",
    availableLanguage: ["Ukrainian"],
  },
  sameAs: [
    "https://www.facebook.com/GZJudoSchool/",
    "https://www.instagram.com/zantaraia_school",
    "https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1",
  ],
  member: [
    {
      "@type": "Person",
      name: "Георгій Зантарая",
      jobTitle: "Засновник",
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/team/zantaraia.jpg`,
    },
    {
      "@type": "Person",
      name: "Анатолій Ласкута",
      jobTitle: "Директор",
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/team/member1.png`,
    },
    {
      "@type": "Person",
      name: "Денис Толкач",
      jobTitle: "Старший тренер",
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/team/tolkach.jpg`,
    },
    {
      "@type": "Person",
      name: "Ольга Старубінська",
      jobTitle: "Тренер",
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/team/starubinska.jpg`,
    },
    {
      "@type": "Person",
      name: "Ольга Стукаленко",
      jobTitle: "Тренер",
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/team/stukolenko.jpg`,
    },
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Головна",
    },
  ],
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
  name: "Головна - Zantaraia Judo School",
  description:
    "Долучайтесь до Zantaraia Judo School! Тренування для дітей та дорослих: фізичний розвиток, підготовка до змагань, дружня атмосфера.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  inLanguage: "uk",
};

const Home = () => {
  return (
    <>
      <JsonLd schema={organizationJsonLd} />
      <JsonLd schema={breadcrumbsJsonLd} />
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <div className="main-bnr-two">
        <div className="banner-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-media">
                  <Image
                    src={mainBannerImage}
                    quality={100}
                    priority={true}
                    className="main-img"
                    alt="Main banner"
                    title="Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="clearfix section-wrapper1">
        <div className="container">
          <InfoCards />
        </div>
      </section>
      <section
        className="about-bx3"
        style={{
          backgroundImage: "url(/images/background/bg8.png)",
          backgroundPosition: " center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content-inner">
          <div className="container">
            <div className="row align-items-end">
              <AboutDetails />
              <div className="col-lg-6 m-md-b30">
                <div className="dz-media p-r20">
                  <Image
                    src={zantaraiaImage}
                    data-wow-delay="0.4s"
                    alt="Zantaraia"
                    className="wow fadeInUp"
                    title="Zantaraia photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="content-inner section-wrapper-1"
        style={{
          backgroundImage: "url(/images/background/bg7.png)",
          backgroundSize: " cover",
          backgroundRepeat: " no-repeat",
        }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title wow fadeInUp">
              Наші <span className="text-primary">переваги</span>
            </h2>
          </div>
          <Advantages />
        </div>
      </section>
      <section className="half-shape-top-w content-inner-2 clearfix">
        <Portfolio />
      </section>
      <section
        className="content-inner testimonial-swiper-wrapper-3"
        style={{
          backgroundImage: "url(/images/background/bg9.png)",
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <p className="sub-title wow fadeInUp">ВІДГУКИ</p>
            <h2 className="title wow fadeInUp">
              Що <span className="text-primary">кажуть</span> про нас
            </h2>
          </div>
          <Testimonial />
        </div>
      </section>
      <section
        className="content-inner-2 theme-bg contact-section style-2 p-t70"
        style={{
          backgroundImage: "url(/images/background/bg10.png)",
          backgroundPosition: " center",
        }}
      >
        <div className="container">
          <ContactInfo />
        </div>
      </section>
      <div className="map z-index-none">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40663.595985020795!2d30.433361728057005!3d50.432257171290516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf54fcd2e17b%3A0xe59b1fd3955732ac!2sShkola%20Dzyudo%20Heorhiya%20Zantaraya!5e0!3m2!1sen!2sua!4v1722780764704!5m2!1sen!2sua"
          style={{
            border: "0",
            marginBottom: "-7px",
            width: "100%",
            height: "400px",
          }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
