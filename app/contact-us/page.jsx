import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import ContactInfo from './_components/contact-info';
import MapEmbed from './_components/map-embed';

export const metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з Zantaraia Judo School! Адреса, телефон та соціальні мережі для запису на тренування та отримання додаткової інформації.",
  keywords: [
    "Контактні дані",
    "Запис на тренування",
    "Адреса дзюдо школи",
    "Телефон",
  ],
  openGraph: {
    url: "/contact-us",
  },
  alternates: {
    canonical: "/contact-us",
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
  name: "Контакти - Zantaraia Judo School",
  description:
    "Зв'яжіться з Zantaraia Judo School! Адреса, телефон та соціальні мережі для запису на тренування та отримання додаткової інформації.",
  url: "https://zantaraia-judo-school.pp.ua/contact-us",
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
