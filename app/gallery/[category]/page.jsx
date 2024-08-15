import Breadcrumbs from "@/components/shared/breadcrumbs";

const GalleryDetails = ({ params }) => {
  return (
    <>
      <Breadcrumbs
        parentTitle="Галерея"
        parentUrl="/gallery"
        activePage={params.category}
      />
    </>
  );
};

export default GalleryDetails;
