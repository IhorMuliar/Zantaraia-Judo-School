export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-theme="light">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
