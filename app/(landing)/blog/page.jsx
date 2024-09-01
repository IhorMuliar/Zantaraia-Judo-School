import { client } from "@/sanity/lib/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import BlogPostCard from "./_components/blog-post-card";

export const revalidate = 0;

async function fetchPosts() {
  const query = `
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
  `;

  return client.fetch(query);
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
              <BlogPostCard post={post} key={post._id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
