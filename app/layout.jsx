import LayoutBuilder from "@/components/layouts/layout-builder";
import ScrollToTop from "@/components/shared/scroll-to-top";

import "@/styles/vendor/swiper/swiper-bundle.min.css";
import "@/styles/scss/main.scss";

export const metadata = {
  metadataBase: new URL("https://zantaraia-judo-school.pp.ua"),
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
  openGraph: {
    type: "website",
    locale: "uk",
    url: "/",
    images: [
      {
        url: 'https://zantaraia-judo-school.pp.ua/opengraph-image.jpg',
        alt: 'Zantaraia Judo School',
      },
    ],
  },
  twitter: {
    site: "https://zantaraia-judo-school.pp.ua",
    card: "summary_large_image",
    images: [`https://zantaraia-judo-school.pp.ua/opengraph-image.jpg`],
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
        <div className="page-wraper">
          <LayoutBuilder>{children}</LayoutBuilder>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
