import Script from "next/script";

const JsonLd = ({ schema, schemaId }) => (
  <Script
    id={schemaId}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default JsonLd;
