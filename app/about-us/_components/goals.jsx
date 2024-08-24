"use client";

import Image from "next/image";
import { Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import trainersImage from "@/public/images/trainers.jpg";
import teamImage from "@/public/images/gallery/photo2.jpg";

const Goals = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-b30">
        <div className="section-head m-0">
          <h2 className="title">
            Допомагаємо досягати ваших <span>цілей</span>
          </h2>
          <p className="m-0">
            Школа Георгія Зантарая - це навчальний заклад, де діти отримують
            можливість навчитися основам дзюдо, розвинути фізичну форму та
            дисципліну.
          </p>
        </div>
        <div className="m-t30 m-b30" data-wow-delay="0.8s">
          <Tab.Container defaultActiveKey={"goals"}>
            <Nav as="ul" className="nav nav-tabs style-1 m-b20">
              <Nav.Item as="li" className="nav-item">
                <Nav.Link className="nav-link" eventKey={"goals"}>
                  <span>Наші цілі</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link className="nav-link" eventKey={"mission"}>
                  <span>Наша місія</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              className="tab-content"
              id="myTabContent"
            >
              <Tab.Pane eventKey={"goals"}>
                <div className="content">
                  <p className="m-0">
                    Розвиток фізичної витривалості, координації та впевненості у
                    собі у дітей. Навчання основам дзюдо, принципам чесної гри
                    та поваги до суперників.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={"mission"}>
                <div className="content">
                  <p className="m-0">
                    Виховувати здорове та активне покоління через спорт,
                    розвивати у дітей лідерські якості, дисципліну та
                    наполегливість.
                  </p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <p className="text-dark m-b30">
          Школа прагне допомогти дітям досягти високого
          рівня майстерності у дзюдо, підготувати їх до участі в національних і
          міжнародних змаганнях. Однією з ключових цілей є підготовка
          спортсменів, здатних боротися за олімпійські медалі та представляти
          країну на найвищому рівні. Школа створює позитивне середовище, де
          кожна дитина може розкрити свій потенціал і здобути навички, корисні
          як у спорті, так і в житті.
        </p>
      </div>
      <div className="col-lg-6 m-b30">
        <div className="dz-media">
          <div className="image-box">
            <Image
              src={trainersImage}
              quality={100}
              alt="Тренери школи Георгія Зантарая"
              title="Тренери школи Георгія Зантарая"
            />
            <div className="info-box">
              <span>
                <FontAwesomeIcon
                  icon={faPersonRunning}
                  className="text-primary"
                />
                Професійні тренери
              </span>
            </div>
          </div>
          <div className="image-box">
            <Image
              src={teamImage}
              quality={100}
              alt="Діти в залі школи Георгія Зантарая"
              title="Діти в залі школи Георгія Зантарая"
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
