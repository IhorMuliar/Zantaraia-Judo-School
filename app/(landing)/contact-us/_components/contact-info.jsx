import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CONTACT_DETAILS } from "../_constants";
import SocialLinks from "./social-links";
import TriangleSvg from "./triangle-svg";

const ContactInfo = () => (
  <div className="contact-box">
    <h2 className="contact-title">Контактна інформація</h2>
    <p className="contact-text">
      Зв’яжіться з нами, і наша команда відповість протягом 24 годин.
    </p>
    <address className="widget widget_get-in-touch">
      <ul>
        {CONTACT_DETAILS.map((detail, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={detail.icon} />
            {detail.link ? (
              <a className="text-white" href={detail.link}>
                {detail.text}
              </a>
            ) : (
              <p className="mb-0">{detail.text}</p>
            )}
          </li>
        ))}
      </ul>
    </address>
    <SocialLinks />
    <TriangleSvg />
  </div>
);

export default ContactInfo;
