import { notFound } from "next/navigation";
import Image from "next/image";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import { CATEGORY_TRANSLATIONS, IMAGES } from "./_constants";

const GalleryDetails = ({ params }) => {
  const { category } = params;

  if (!CATEGORY_TRANSLATIONS[category]) {
    notFound();

    return null;
  }

  const filteredImages = IMAGES.filter((image) => image.category === category);

  return (
    <>
      <Breadcrumbs
        parentTitle="Галерея"
        parentUrl="/gallery"
        activePage={CATEGORY_TRANSLATIONS[category]}
      />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {filteredImages.map((item, index) => (
              <div className="col-lg-4 col-sm-6 m-b30" key={index}>
                <div className="dz-box style-2">
                  <div className="dz-media">
                    <Image
                      src={item.image}
                      width={340}
                      height={250}
                      quality={100}
                      alt={`${CATEGORY_TRANSLATIONS[category]} - ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryDetails;
