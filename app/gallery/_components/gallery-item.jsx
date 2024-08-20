import Link from "next/link";
import Image from "next/image";

const GalleryItem = ({ item }) => (
  <div className="col-lg-4 col-sm-6 m-b30">
    <div className="dz-box style-2">
      <div className="dz-media">
        <Link href={`/gallery/${item.category}`}>
          <Image
            src={item.image}
            width={340}
            height={250}
            quality={100}
            alt={item.title}
            title={item.title}
          />
        </Link>
      </div>
      <div className="dz-info">
        <h4 className="title">
          <Link href={`/gallery/${item.category}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  </div>
);

export default GalleryItem;
