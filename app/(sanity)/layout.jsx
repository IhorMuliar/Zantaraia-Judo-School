export { metadata, viewport } from "next-sanity/studio";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
