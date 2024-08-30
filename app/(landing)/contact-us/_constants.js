import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const CONTACT_DETAILS = [
  { icon: faLocationDot, text: "вул. Василя Липківського, 36, Київ" },
  { icon: faPhone, text: "+38 (093) 151 77 48", link: "tel:+380931517748" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/GZJudoSchool/",
    icon: faFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/zantaraia_school",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1",
    icon: faTiktok,
    label: "TikTok",
  },
];
