import Link from "next/link";
import Image from "next/image";

const GalleryCategory = ({ category }) => (
  <div className="col-lg-4 col-sm-6 m-b30">
    <div className="dz-box style-2">
      <div className="dz-media">
        <Link href={`/gallery/${category.slug.current}`}>
          <Image
            src={category.preview.asset.url}
            width={340}
            height={250}
            quality={100}
            alt={category.description}
            title={category.description}
          />
        </Link>
      </div>
      <div className="dz-info">
        <h2 className="h4 title">
          <Link href={`/gallery/${category.slug.current}`}>
            {category.title}
          </Link>
        </h2>
      </div>
    </div>
  </div>
);

export default GalleryCategory;
