import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const revalidate = 0;

async function fetchPosts() {
  return await client.fetch(`
    *[_type == "blogPost"] | order(title asc) {
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
  const posts = await fetchPosts();

  return (
    <div className="page-content bg-white">
      <Breadcrumbs parentTitle="Головна" activePage="Новини" />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-6 col-xl-4 m-b30" key={post._id}>
                <div className="dz-card style-1 overlay-shine">
                  <div className="dz-media">
                    <Link href={`/blog/${post.slug.current}`}>
                      <Image
                        src={post.preview.asset.url}
                        width="200"
                        height="75"
                        alt={post.title}
                      />
                    </Link>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-date">{post.releaseDate}</li>
                      </ul>
                    </div>
                    <h4 className="dz-title">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <p>{post.description}</p>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="btn btn-primary btn-skew"
                    >
                      <span>Детальніше</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
