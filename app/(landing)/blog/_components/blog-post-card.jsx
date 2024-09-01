import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import { formatDate } from '@/utils';

const BlogPostCard = ({ post }) => (
  <div className="col-md-6 col-xl-4 m-b30">
    <div className="dz-card style-1 overlay-shine">
      <div className="dz-media">
        <Link href={`/blog/${post.slug.current}`}>
          <Image
            src={post.preview.asset.url}
            width={200}
            height={75}
            alt={post.title}
          />
        </Link>
      </div>
      <div className="dz-info">
        <div className="dz-meta">
          <p className="post-date m-0">
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDate(post.releaseDate)}
          </p>
        </div>
        <h4 className="dz-title">
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
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
);

export default BlogPostCard;