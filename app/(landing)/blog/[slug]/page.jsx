import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import BlogActions from "../[slug]/_components/blog-actions";

export const revalidate = 0;

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("uk-UA", options)
    .format(date)
    .replace(" р.", "");
}

async function fetchPost(slug) {
  const query = `    
    *[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      releaseDate,
      content,
      slug,
      preview {
        asset -> {
          _id,
          url
        }
      }
    }`;

  return await client.fetch(query, { slug });
}

const PortableTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || "Image"}
        width={800}
        height={800}
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
          <div className="blog-content">
            <div className="blog-meta">
              <p className="blog-date">
                <FontAwesomeIcon icon={faCalendarDay} />
                {formatDate(post.releaseDate)}
              </p>
            </div>
            <div className="blog-details">
              <PortableText
                value={post.content}
                components={PortableTextComponent}
              />
            </div>
            <BlogActions />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
