import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/utils";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import BlogActions from "./_components/blog-actions";

export const revalidate = 0;

async function fetchPost(slug) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      releaseDate,
      content,
      slug,
    }
  `;

  return client.fetch(query, { slug });
}

const PortableTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt={value.description || "Фото"}
        title={value.description || "Фото"}
        width={700}
        height={300}
        quality={100}
      />
    ),
  },
};

const BlogDetails = async ({ params }) => {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <div className="page-content">
      <Breadcrumbs
        parentTitle="Новини"
        parentUrl="/blog"
        activePage={post.title}
      />
      <section className="content-inner">
        <div className="container">
          <article className="blog-content">
            <header className="blog-meta">
              <p className="blog-date">
                <FontAwesomeIcon icon={faCalendarDay} />
                {formatDate(post.releaseDate)}
              </p>
            </header>
            <div className="blog-details">
              <PortableText
                value={post.content}
                components={PortableTextComponent}
              />
            </div>
            <BlogActions />
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
