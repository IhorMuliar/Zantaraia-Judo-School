import Layout from "@/components/layouts/layout";
import ScrollToTop from "@/components/shared/scroll-to-top";

import "@/styles/vendor/swiper/swiper-bundle.min.css";
import "@/styles/scss/main.scss";

export const metadata = {
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
          <Layout>{children}</Layout>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
