import { notFound } from "next/navigation";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const metadata = {
  title: "Галерея школи дзюдо",
  description:
    "Перегляньте фотогалерею школи дзюдо Георгія Зантарая: яскраві моменти тренувань, змагань та життя нашого клубу в атмосфері дружби та розвитку.",
  openGraph: {
    url: "/gallery",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        alt: "Zantaraia Judo School",
      },
    ],
    type: "website",
    locale: "uk",
  },
  alternates: {
    canonical: "/gallery",
  },
};

async function fetchCategoryData(category) {
  const categoryData = await client.fetch(
    `*[_type == "galleryCategory" && slug.current == $category][0]{
      _id,
      title,
      description,
      photos[] -> {
        _id,
        title,
        image {
          asset -> {
            _id,
            url
          }
        }
      }
    }`,
    { category },
  );

  if (!categoryData) {
    return null;
  }

  return { category: categoryData };
}

const GalleryDetails = async ({ params }) => {
  const { category } = params;

  const data = await fetchCategoryData(category);

  if (!data.category.photos) {
    notFound();
    return null;
  }

  const { category: categoryData } = data;

  return (
    <>
      <Breadcrumbs
        parentTitle="Галерея"
        parentUrl="/gallery"
        activePage={categoryData.title}
      />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {categoryData.photos.map((photo) => (
              <div className="col-lg-4 col-sm-6 m-b30" key={photo._id}>
                <div className="dz-box style-2">
                  <div className="dz-media">
                    <Image
                      src={photo.image.asset.url}
                      width={340}
                      height={250}
                      quality={100}
                      alt={photo.title}
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
