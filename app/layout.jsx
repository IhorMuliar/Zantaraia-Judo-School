import "@/styles/scss/main.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body data-theme-color="light" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
