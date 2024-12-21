import { config } from "@fortawesome/fontawesome-svg-core";

import LayoutBuilder from "@/components/layouts/layout-builder";
import ScrollToTop from "@/components/shared/scroll-to-top";
import FloatingActionButton from "@/components/shared/floating-action-button";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/vendor/swiper/swiper-bundle.min.css";
import "@/styles/scss/main.scss";

config.autoAddCss = false;

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    template: "%s - Zantaraia Judo School",
    default: "Zantaraia Judo School",
  },
  authors: [
    {
      name: "Georgii Zantaraia",
      url: "https://www.instagram.com/zantaraia_school",
    },
  ],
  category: "sport",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    url: "/",
    siteName: "Zantaraia Judo School",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        alt: "Zantaraia Judo School",
      },
    ],
    type: "website",
    locale: "uk",
  },
  twitter: {
    site: `Zantaraia Judo School`,
    card: "summary_large_image",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`],
  },
};

export const viewport = {
  themeColor: "#fff",
  colorScheme: "only light",
};

const RootLayout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <LayoutBuilder>{children}</LayoutBuilder>
      <ScrollToTop />
      <FloatingActionButton />
    </div>
  );
};

export default RootLayout;
