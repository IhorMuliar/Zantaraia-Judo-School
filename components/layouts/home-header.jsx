"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useReducer, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { MENU_ITEMS } from "@/constants";
import logoImage from "@/public/images/logo.jpg";

const initialState = {
  active: "",
  activeSubmenu: "",
};

const reducer = (state, updatedState) => ({
  ...state,
  ...updatedState,
});

const HomeHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const pathname = usePathname();

  useEffect(() => {
    const mainMenu = document.getElementById("OpenMenu");
    if (mainMenu) {
      mainMenu.classList.toggle("show", sidebarOpen);
    }
  }, [sidebarOpen]);

  const handleMenuActive = (status) => {
    dispatch({ active: state.active === status ? "" : status });
  };

  const handleSubmenuActive = (status) => {
    dispatch({ activeSubmenu: state.activeSubmenu === status ? "" : status });
  };

  const setActiveMenuFromPath = () => {
    MENU_ITEMS.forEach((item) => {
      if (
        item.to === pathname ||
        item.content?.some((subItem) => subItem.to === pathname)
      ) {
        setActiveMenu(item.title);
      }
    });
  };

  useMemo(setActiveMenuFromPath, [pathname]);

  const renderMenuItems = () =>
    MENU_ITEMS.map((item, index) => {
      const isActive = item.title === activeMenu;
      const menuClass = item.classChange;

      if (menuClass !== "sub-menu-down") {
        return (
          <li
            key={index}
            className={`${menuClass} ${isActive ? "active" : ""}`}
          >
            <Link href={item.to}>{item.title}</Link>
          </li>
        );
      }

      return (
        <li
          key={index}
          className={`${menuClass} ${state.active === item.title ? "open active" : ""} ${isActive ? "active" : ""}`}
        >
          <Link href="#" onClick={() => handleMenuActive(item.title)}>
            {item.title}
          </Link>
          <Collapse in={state.active === item.title}>
            <ul
              className={`sub-menu ${menuClass === "mm-collapse" ? "open" : ""}`}
            >
              {item.content?.map((data, index) => (
                <li
                  key={index}
                  className={state.activeSubmenu === data.title ? "open" : ""}
                >
                  {data.content?.length > 0 ? (
                    <>
                      <Link
                        href={data.to}
                        onClick={() => handleSubmenuActive(data.title)}
                      >
                        {data.title}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                      <Collapse in={state.activeSubmenu === data.title}>
                        <ul
                          className={`sub-menu ${menuClass === "mm-collapse" ? "open" : ""}`}
                        >
                          {data.content.map((subData, index) => (
                            <li key={index}>
                              <Link href={subData.to}>{subData.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </Collapse>
                    </>
                  ) : (
                    <Link href={data.to}>{data.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </Collapse>
        </li>
      );
    });

  return (
    <div className="main-bar clearfix">
      <div className="container clearfix">
        <div className="box-header clearfix">
          <div className="logo-header mostion logo-dark">
            <Link href="/">
              <Image
                className="select_logo"
                src={logoImage}
                quality={100}
                alt="Logo"
                title="Zantaraia school logo"
              />
            </Link>
          </div>
          <button
            className={`navbar-toggler navicon justify-content-end ${sidebarOpen ? "open" : "collapsed"}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}></div>
          <nav
            id="navbarNavDropdown"
            className={`header-nav navbar-collapse collapse justify-content-around ${sidebarOpen ? "show" : ""}`}
          >
            <div className="logo-header logo-dark">
              <Link href="/">
                <Image
                  src={logoImage}
                  quality={100}
                  alt="Logo"
                  title="Zantaraia school logo"
                />
              </Link>
            </div>
            <ul className="nav navbar-nav navbar navbar-left">
              {renderMenuItems()}
            </ul>
            <div className="dz-social-icon">
              <ul>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/GZJudoSchool/"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/zantaraia_school"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
