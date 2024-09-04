import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const BlogActions = () => (
  <div className="blog-actions">
    <div className="blog-tags">
      <p className="blog-tags-title">Теги:</p>
      {["Табір", "Спортивні збори"].map((tag) => (
        <Link href="#" key={tag}>
          <span>{tag}</span>
        </Link>
      ))}
    </div>
    <ul className="blog-socials">
      {socialLinks.map(({ href, icon }, index) => (
        <li key={index}>
          <Link target="_blank" href={href} rel="noreferrer">
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const socialLinks = [
  { href: "https://www.facebook.com/", icon: faFacebookF },
  { href: "https://www.instagram.com/", icon: faInstagram },
  { href: "https://www.tiktok.com/", icon: faTiktok },
];

export default BlogActions;