import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import ContactInfo from './_components/contact-info';
import MapEmbed from './_components/map-embed';

export const metadata = {
  title: "Контакти",
  description:
    "Зв’яжіться з нами! Адреса, телефон та соціальні мережі для запису на тренування та отримання додаткової інформації про школу дзюдо Георгія Зантарая.",
  openGraph: {
    url: "/contact-us",
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
    canonical: "/contact-us",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zantaraia Judo School",
  alternateName : "Школа Георгія Зантарая",
  url: process.env.NEXT_PUBLIC_SITE_URL,
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Контакти - Zantaraia Judo School",
  description:
    "Зв'яжіться з Zantaraia Judo School! Адреса, телефон та соціальні мережі для запису на тренування та отримання додаткової інформації.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
  inLanguage: "uk",
};

const ContactUs = () => {
  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Контакти" />
      <section className="content-inner-1 z-index-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-5 m-sm-b30 m-xl-b0">
              <ContactInfo />
            </div>
            <div className="col-md-6 col-xl-7">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
