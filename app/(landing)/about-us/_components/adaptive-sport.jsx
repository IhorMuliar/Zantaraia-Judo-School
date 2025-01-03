import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import emotionsImage from "@/public/images/gallery/adaptive-sport/photo9.jpg";
import exercisesImage from "@/public/images/gallery/adaptive-sport/photo8.jpg";

const AdaptiveSport = () => {
  return (
    <>
      <div className="col-lg-6 m-b30">
        <div className="dz-media">
          <div className="image-box">
            <Image
              src={emotionsImage}
              quality={100}
              sizes="(min-width: 1180px) 349px, (min-width: 1000px) 240px, (min-width: 780px) 480px, (min-width: 580px) 300px, calc(100vw - 90px)"
              alt="Адаптивний спорт під керівництвом тренера в школі дзюдо Георгія Зантарая"
              title="Адаптивний спорт під керівництвом тренера в школі дзюдо Георгія Зантарая"
            />
          </div>
          <div className="image-box">
            <Image
              src={exercisesImage}
              quality={100}
              sizes="(min-width: 1180px) 429px, (min-width: 1000px) 320px, (min-width: 780px) 560px, (min-width: 580px) 380px, calc(100vw - 90px)"
              alt="Командне заняття з адаптивного спорту в школі дзюдо Георгія Зантарая, де діти працюють разом для покращення своїх навичок"
              title="Командне заняття з адаптивного спорту в школі дзюдо Георгія Зантарая, де діти працюють разом для покращення своїх навичок"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 about-content m-b30">
        <div className="section-head">
          <h2 className="title">
            <span>Адаптивний</span> спорт
          </h2>
          <p>
            З метою розвитку та <b className="fw-bold">пропагування</b>{" "}
            адаптивного спорту, на базі нашої школи було створено пілотну
            інклюзивну групу для дітей та молоді з ментальними порушеннями.
            Завдяки адаптованим фізичним навантаженням, вихованці покращують
            розуміння та усвідомлення свого тіла і себе у просторі, розвивають
            навички спілкування та комунікації, розвиваються фізично та
            емоційно, підвищуючи самооцінку та знайомляться з основами бойового
            мистецтва дзюдо.
          </p>
          <p>
            Наша діяльність спрямована на комплексну підтримку сімей, в яких
            виховуються діти та молодь з особливостями розвитку, шляхом
            залучення до тренувань інших членів родини
          </p>
        </div>
        <div className="contact-us">
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} className="text-primary" />
          </span>
          <div className="content d-flex flex-column">
            <span>Зв'яжіться з нами для консультації</span>
            <a className="number" href="tel:+380931517748">
              +38 (093) 151 77 48
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdaptiveSport;
