import {
  faCalendarDays,
  faChild,
  faDumbbell,
  faMedal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const ADVANTAGE1 = (
  <svg
    className="big-arrow"
    width="72"
    height="200"
    viewBox="0 0 72 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.43268 1.49268L69.0001 99.0571L2.00586 198.507"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);
export const ADVANTAGE2 = (
  <svg
    className="big-arrow"
    width="72"
    height="200"
    viewBox="0 0 72 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.43268 1.49268L69.0001 99.0571L2.00586 198.507"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);
export const ADVANTAGE3 = (
  <svg
    className="big-arrow"
    width="72"
    height="200"
    viewBox="0 0 72 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.43268 1.49268L69.0001 99.0571L2.00586 198.507"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);

export const ADVANTAGES_STEPS = [
  {
    icon: faChild,
    svg: ADVANTAGE1,
    title: "Будь-який вік",
    description:
      "Наші спортсмени починають тренування вже з 4 років. Приєднуйтесь до нас з раннього віку.",
    num: 1,
  },
  {
    icon: faMedal,
    svg: ADVANTAGE2,
    title: "Часті змагання",
    description:
      "Наш клуб регулярно бере участь у різних змаганнях, що дозволяє спортсменам постійно вдосконалювати свої навички.",
    num: 2,
  },
  {
    icon: faDumbbell,
    svg: ADVANTAGE3,
    title: "Фізична форма",
    description:
      "Ми забезпечуємо збалансовані тренування для досягнення найкращих результатів.",
    num: 3,
  },
];

export const INFO_CARDS = [
  {
    icon: faDumbbell,
    title: "Наша школа",
    description: "Дізнайтеся про нашу школу: цінності та особливості.",
    link: "/about-us",
  },
  {
    icon: faUsers,
    title: "Наші тренери",
    description: "Ознайомтеся з командою професійних тренерів",
    link: "/team",
  },
  {
    icon: faMedal,
    title: "Моменти з нами",
    description: "Перегляньте події та досягнення нашої школи.",
    link: "/gallery",
  },
  {
    icon: faCalendarDays,
    title: "Наш розклад",
    description: "Ознайомтеся з розкладом занять.",
    link: "/schedule",
  },
];

export const PORTFOLIO_DATA = [
  { image: "/images/portfolio/pic8.png" },
  { image: "/images/portfolio/pic9.png" },
  { image: "/images/portfolio/pic10.png" },
  { image: "/images/portfolio/pic8.png" },
  { image: "/images/portfolio/pic9.png" },
  { image: "/images/portfolio/pic10.png" },
];

export const SERVICES = [
  { title: "Дзюдо для початківців" },
  { title: "Розвиток техніки дзюдо" },
  { title: "Підготовка до змагань" },
  { title: "Фіз-підготовка" },
  { title: "Кардіо" },
  { title: "Спаринг і тактика" },
];

export const SOCIALS = [
  {
    icon: faFacebookF,
    link: "https://www.facebook.com/GZJudoSchool/",
    label: "Facebook",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/zantaraia_school",
    label: "Instagram",
  },
  {
    icon: faTiktok,
    link: "https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1",
    label: "TikTok",
  },
];

export const TESTIMONIALS = [
  { name: "Олексій Коваленко" },
  { name: "Марина Гончарова" },
  { name: "Іван Петров" },
];
