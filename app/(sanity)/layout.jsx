export { metadata, viewport } from "next-sanity/studio";

const SanityLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
};

export default SanityLayout;
