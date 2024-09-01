import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faTiktok,
  } from "@fortawesome/free-brands-svg-icons";

import { client } from "@/sanity/lib/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import phototest from "@/public/images/gallery/photo4.jpg"

export const revalidate = 0;

async function fetchPost(slug) {
    const query = `    
    *[_type == "blogPost" && slug.current == "${slug}"][0]{
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
    }`
  return await client.fetch(query);
}

const BlogDetails = async({params}) => {
    const post = await fetchPost(params.slug);
    return (
        <>
            <div className="page-content">
            <Breadcrumbs parentTitle="Головна" activePage="Новини" />
                <section className="content-inner">
                    <div className="container">
                        <div className="row ">
                            <div className="">
                                <div className="">
                                    <div className="hero">
                                    <Image
                                        src={post.preview.asset.url}
                                        height={450}
                                        width={500}
                                        alt="test"
                                    />
                                    </div>
                                    <div className="blog-content">
                                        <p className="blog-date">{post.releaseDate}</p>
                                        <h2 className="">{post.title}</h2>
                                        <div className="blog-details">
                                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>
                                            <p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing Link single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>
                                            <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
                                            <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>
                                        </div>
                                    </div>
                                    <div className="blog-actions">
                                            <div className="blog-tags">
                                                <p className="blog-tags-title">Tags:</p>
                                                <Link href={"#"}><span>Corporate</span></Link>
                                                <Link href={"#"}><span>Blog</span></Link>
                                                <Link href={"#"}><span>Marketing</span></Link>
                                            </div>
                                            <ul className="blog-socials">
                                                <li><Link target="_blank" 
                                                        href="https://www.facebook.com/" rel="noreferrer"
                                                        >
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </Link>
                                                </li>
                                                <li><Link target="_blank"  href="https://www.instagram.com/" rel="noreferrer">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </Link>
                                                </li>
                                                <li><Link target="_blank"  href="https://www.instagram.com/" rel="noreferrer">
                                                        <FontAwesomeIcon icon={faTiktok} />
                                                    </Link>
                                                </li>
                                            </ul>								
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </section>
            </div>
        </>
    );
}

export default BlogDetails;