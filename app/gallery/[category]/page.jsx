"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import { allImages } from "./constants";

const categoryTranslations = {
  competions: "Змагання",
  travels: "Подорожі",
  "sport-meetings": "Спортивні збори",
};



const GalleryDetails = ({ params }) => {
  const { category } = params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!categoryTranslations[category]) {
      notFound();

      return;
    }

    const filteredImages = allImages.filter((image) => image.category === category);
    setImages(filteredImages);
  }, [category]);

  const translatedCategory = categoryTranslations[category];
  
  if (!translatedCategory) {
    notFound();

    return null;
  }

  return (
    <>
      <Breadcrumbs
        parentTitle="Галерея"
        parentUrl="/gallery"
        activePage={translatedCategory}
      />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {images.map((item, index) => (
              <div className="col-lg-4 col-sm-6 m-b40" key={index}>
                <div className="dz-box style-2">
                  <div className="dz-media">
                    <Image
                      src={item.image}
                      width={340}
                      height={250}
                      quality={100}
                      alt=""
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

