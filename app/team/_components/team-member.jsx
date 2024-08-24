import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const TeamMember = ({ member }) => (
  <div className="col-lg-4 col-sm-6 m-b30">
    <div className="dz-team style-1">
      <div className="dz-media">
        <Image
          src={member.image}
          width={285}
          height={475}
          alt={member.title}
          title={member.title}
          quality={100}
        />
        <ul className="team-social">
          {member.facebook && (
            <li>
              <Link
                target="_blank"
                href={member.facebook}
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
          )}
          {member.instagram && (
            <li>
              <Link
                target="_blank"
                href={member.instagram}
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="dz-content">
        <p className="dz-name m-b0">{member.title}</p>
        <span className="dz-position">{member.description}</span>
      </div>
    </div>
  </div>
);

export default TeamMember;
