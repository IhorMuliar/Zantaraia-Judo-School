import Image from "next/image";
import Link from 'next/link';

import { client } from "@/sanity/lib/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";

const cardBlog = [
    {image1: "/images/gallery/photo23.jpg", title:"How to keep your Body.", date:"17 May 2023", },
    {image1: "/images/gallery/photo23.jpg", title:"Best 50 Tips For Fitness.", date:"18 May 2023", },
    {image1: "/images/gallery/photo23.jpg", title:"The Philosophy Of Fitness.", date:"22 May 2023", },
    {image1: "/images/gallery/photo23.jpg", title:"Fitness Strategies For Beginners.", date:"24 May 2023", },
]

export const revalidate = 0;

async function fetchNews() {
  return await client.fetch(`
    *[_type == "news"] | order(title asc) {
      _id,
      title,
      releaseDate,
      description,
      slug,
      preview {
        asset -> {
          _id,
          url
        }
      }
    }
  `);
}

const Blog = async () => {
    const news = await fetchNews();

    return (
        <>
            <div className="page-content bg-white">
            <Breadcrumbs parentTitle="Головна" activePage="Новини" />    
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {news.map((item)=>(
                                <div className="col-md-6 col-xl-4 m-b30" key={item._id}>
                                    <div className="dz-card style-1 overlay-shine">
                                        <div className="dz-media">
                                            <Link href={`/blog/${item.slug.current}`}>
                                                <Image src={item.preview.asset.url} width="200" height="75" alt="" />
                                            </Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">{item.releaseDate}</li>
                                                </ul>
                                            </div>
                                            <h4 className="dz-title">
                                                <Link href={`/blog/${item.slug.current}`}>{item.title}</Link>
                                            </h4>
                                            <p>{item.description}</p>
                                            <Link href={`/blog/${item.slug.current}`} className="btn btn-primary btn-skew"><span>Детальніше</span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="call-action style-1 footer-action">
			        <div className="container">
                    </div>
                </section>
            </div>   
        </>
    );
};

export default Blog;