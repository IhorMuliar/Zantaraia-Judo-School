import LayoutBuilder from "@/components/layouts/layout-builder";
import ScrollToTop from "@/components/shared/scroll-to-top";
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    url: "/",
    siteName: 'Zantaraia Judo School',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        alt: 'Zantaraia Judo School',
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
  themeColor: "#fcde3b",
  colorScheme: "only light",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="uk">
      <body data-theme-color="color_5" suppressHydrationWarning>
        <div className="page-wrapper">
          <LayoutBuilder>{children}</LayoutBuilder>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
