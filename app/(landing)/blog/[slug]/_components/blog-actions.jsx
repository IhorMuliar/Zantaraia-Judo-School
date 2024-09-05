import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  faFacebookF: faFacebookF,
  faInstagram: faInstagram,
  faTiktok: faTiktok,
};

const BlogActions = ({ socialLinks, tags }) => (
  <div className="blog-actions">
    <div className="blog-tags">
      <p className="blog-tags-title">Теги:</p>
      {tags.map((tag) => (
        <Link href="#" key={tag}>
          <span>{tag}</span>
        </Link>
      ))}
    </div>
    <ul className="blog-socials">
      {socialLinks.map(({ href, icon }, index) => (
        <li key={index}>
          <Link target="_blank" href={href} rel="noreferrer">
            <FontAwesomeIcon icon={iconMap[icon]} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogActions;
