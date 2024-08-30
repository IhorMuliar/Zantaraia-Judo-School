import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SOCIAL_LINKS } from '../_constants';

const SocialLinks = () => (
  <>
    <p className="m-b15 text-white">Ми в соцмережах</p>
    <div className="dz-social-icon style-1 dark">
      <ul>
        {SOCIAL_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              target="_blank"
              href={link.href}
              rel="noreferrer"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default SocialLinks;