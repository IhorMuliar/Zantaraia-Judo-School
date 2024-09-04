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
    description:
      "Дізнайтеся більше про школу дзюдо Георгія Зантарая, наші цінності та підхід до навчання дзюдо",
    link: "/about-us",
  },
  {
    icon: faUsers,
    title: "Наші тренери",
    description:
      "Познайомтесь з нашими досвідченими тренерами, які допоможуть вам досягти успіху у дзюдо",
    link: "/team",
  },
  {
    icon: faImages,
    title: "Моменти з нами",
    description:
      "Перегляньте яскраві моменти, тренування та подій у школі дзюдо Георгія Зантарая",
    link: "/gallery",
  },
  {
    icon: faCalendarDays,
    title: "Наш розклад",
    description:
      "Ознайомтеся з розкладом тренувань у школі дзюдо та сплануйте свої заняття ефективно",
    link: "/schedule",
  },
];

export const PORTFOLIO_DATA = [
  {
    image: "/images/gallery/photo1.jpg",
    alt: "Зал Георгія Зантарая з дітьми",
  },
  {
    image: "/images/gallery/photo4.jpg",
    alt: "Зал в Швейцарії з дітьми",
  },
  {
    image: "/images/gallery/photo3.jpg",
    alt: "Діти на відпочунку у Швейцарії",
  },
  {
    image: "/images/gallery/photo23.jpg",
    alt: "Спортивні збори в Швейцарії з дітьми",
  },
  {
    image: "/images/gallery/photo9.jpg",
    alt: "Діти на спортивних зборах у Карпатах",
  },
  {
    image: "/images/gallery/photo22.jpg",
    alt: "Діти на відпочунку в Албанії",
  },
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
