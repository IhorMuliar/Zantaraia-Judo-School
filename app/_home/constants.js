import {
  faCalendarDays,
  faChild,
  faDumbbell,
  faImages,
  faMedal,
  faSchool,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const BIG_ARROW = () => (
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
    title: "Будь-який вік",
    description:
      "Наші спортсмени починають тренування вже з 4 років. Приєднуйтесь до нас з раннього віку",
    num: 1,
  },
  {
    icon: faMedal,
    title: "Часті змагання",
    description:
      "Наш клуб регулярно бере участь у різних змаганнях, що дозволяє спортсменам постійно вдосконалювати свої навички",
    num: 2,
  },
  {
    icon: faDumbbell,
    title: "Оптимальна фізична форма",
    description:
      "Ми забезпечуємо збалансовані тренування для досягнення найкращих результатів.",
    num: 3,
  },
];

export const INFO_CARDS = [
  {
    icon: faSchool,
    title: "Наша школа",
    description: "Дізнайтеся більше про наші цінності та підхід до навчання",
    link: "/about-us",
  },
  {
    icon: faUsers,
    title: "Наші тренери",
    description: "Зустрічайте нашу команду досвідчених і професійних тренерів",
    link: "/team",
  },
  {
    icon: faImages,
    title: "Моменти з нами",
    description: "Перегляньте яскраві моменти та досягнення нашої школи",
    link: "/gallery",
  },
  {
    icon: faCalendarDays,
    title: "Наш розклад",
    description:
      "Ознайомтеся з нашим розкладом занять та плануйте свій час ефективно",
    link: "/schedule",
  },
];

export const PORTFOLIO_DATA = [
  { image: "/images/gallery/photo1.jpg" },
  { image: "/images/gallery/photo4.jpg" },
  { image: "/images/gallery/photo3.jpg" },
];

export const SERVICES = [
  { title: "Дзюдо для початківців" },
  { title: "Розвиток техніки дзюдо" },
  { title: "Підготовка до змагань" },
  { title: "Фізична підготовка" },
  { title: "Кардіо тренування" },
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
  {
    name: "Олександр Семенюк",
    feedback:
      "Зал має чудові умови для тренувань. Тренери справжні професіонали, які допомагають вдосконалювати техніку і досягати нових результатів. Це ідеальне місце для тих, хто серйозно ставиться до свого розвитку у спорті.",
    role: "Спортсмен",
  },
  {
    name: "Ірина Ковальчук",
    feedback:
      "Ми дуже задоволені залом і умовами, які тут створені для дітей. Тренери уважні, вони створюють атмосферу підтримки і мотивації. Зал завжди чистий і добре обладнаний, що дуже важливо для безпеки дітей.",
    role: "Мама спортсмена",
  },
  {
    name: "Андрій Коваленко",
    feedback:
      "Зал дуже зручний, розташований у зручному місці, що дозволяє нам без проблем відвідувати тренування. Тренери надзвичайно професійні та дбайливі, вони завжди знаходять підхід до кожної дитини. Наш син із задоволенням займається, і ми бачимо, як він розвивається як спортсмен.",
    role: "Батько спортсмена",
  },
];
