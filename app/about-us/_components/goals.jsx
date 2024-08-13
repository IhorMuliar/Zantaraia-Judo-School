"use client";

import Link from "next/link";
import Image from "next/image";
import { Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUserGroup, faPersonRunning } from "@fortawesome/free-solid-svg-icons";

import image from "@/public/images/about/image-box/pic1.jpg";

const Goals = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-b30">
        <div className="section-head m-0">
          <span className="sub-title">ПРО НАС</span>
          <h2 className="title">
            Допомагаємо досягати ваших <span>цілей</span>
          </h2>
          <p className="m-0">
            Ми - школа дзюдо, яка допомагає вам досягти бажаних результатів.
            Незалежно від того, чи ваша мета - навчитися дзюдо, покращити
            фізичну форму, зміцнити м'язи або розвинути впевненість у собі, ми
            готові розробити для вас індивідуальну програму тренувань та надати
            необхідні рекомендації.
          </p>
        </div>
        <div className="" data-wow-delay="0.8s">
          <Tab.Container defaultActiveKey={"mission"}>
            <Nav as="ul" className="nav nav-tabs style-1 m-b20 m-t30">
              <Nav.Item as="li" className="nav-item">
                <Nav.Link className="nav-link" eventKey={"mission"}>
                  <span>Наша місія</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link className="nav-link" eventKey={"vision"}>
                  <span>Наше бачення</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              className="tab-content m-sm-b30 m-b40 p-r30"
              id="myTabContent"
            >
              <Tab.Pane eventKey={"mission"}>
                <div className="content">
                  <p>
                    Ми прагнемо створити найкращі умови для розвитку та
                    тренувань у дзюдо, сприяючи фізичному та духовному розвитку
                    наших учасників. Наша школа дзюдо виховує не лише сильних
                    спортсменів, а й впевнених у собі, дисциплінованих і
                    цілеспрямованих людей.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={"vision"}>
                <div className="content">
                  <p>
                    Ми бачимо наш клуб як центр спортивного та культурного життя
                    громади, де кожен має можливість досягти своїх цілей і
                    розкрити свій потенціал. Ми віримо, що дзюдо - це не лише
                    спорт, а й шлях до самовдосконалення та гармонії.
                  </p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="contact-us">
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} className="text-primary"/>
          </span>
          <div className="content d-flex flex-column">
            <span>Зв'яжіться з нами для консультації</span>
            <Link className="number" href="tel:+380969795892">
              096-979-58-92
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 m-b30">
        <div className="dz-media">
          <div className="image-box">
            <Image
              src={image}
              quality={100}
              alt="Goal 1"
              title="Your goal photo 1"
            />
            <div className="info-box">
              <span>
                <FontAwesomeIcon icon={faPersonRunning} className="text-primary"/>
                Професійні тренера
              </span>
            </div>
          </div>
          <div className="image-box">
            <Image
              src={image}
              quality={100}
              alt="Goal 2"
              title="Your goal photo 1"
            />
            <div className="info-box">
              <span>
                <FontAwesomeIcon icon={faUserGroup} className="text-primary" />
                Дружня команда
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
