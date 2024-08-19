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

const reducer = (state, action) => ({
  ...state,
  ...action,
});

const HomeHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 991) setSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const mainMenu = document.getElementById("OpenMenu");

    if (mainMenu) {
      mainMenu.classList.toggle("show", sidebarOpen);
    }

    document.body.classList.toggle("overflow-hidden", sidebarOpen);
  }, [sidebarOpen]);

  useMemo(() => {
    const findActiveMenu = () => {
      MENU_ITEMS.forEach((item) => {
        if (
          item.to === pathname ||
          item.content?.some((sub) => sub.to === pathname)
        ) {
          setActiveMenu(item.title);
        }
      });
    };
    findActiveMenu();
  }, [pathname]);

  const handleMenuToggle = (menuTitle) => {
    dispatch({ active: state.active === menuTitle ? "" : menuTitle });
  };

  const handleSubmenuToggle = (submenuTitle) => {
    dispatch({
      activeSubmenu: state.activeSubmenu === submenuTitle ? "" : submenuTitle,
    });
  };

  return (
    <div className="main-bar clearfix">
      <div className="container clearfix">
        <div className="box-header clearfix">
          <div className="logo-header mostion logo-dark">
            <Link href="/">
              <Image
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
          {sidebarOpen && <div className="sidebar-overlay"></div>}
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
            <ul className="nav navbar-nav navbar-left">
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className={`${item.classChange} ${
                    state.active === item.title || activeMenu === item.title
                      ? "active"
                      : ""
                  }`}
                >
                  {item.content && item.content.length > 0 ? (
                    <>
                      <Link
                        href="#"
                        onClick={() => handleMenuToggle(item.title)}
                      >
                        {item.title}
                      </Link>
                      <Collapse in={state.active === item.title}>
                        <ul
                          className={`sub-menu ${item.classChange === "mm-collapse" ? "open" : ""}`}
                        >
                          {item.content.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${
                                state.activeSubmenu === subItem.title
                                  ? "open"
                                  : ""
                              }`}
                            >
                              {subItem.content && subItem.content.length > 0 ? (
                                <>
                                  <Link
                                    href={subItem.to}
                                    onClick={() =>
                                      handleSubmenuToggle(subItem.title)
                                    }
                                  >
                                    {subItem.title}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                  </Link>
                                  <Collapse
                                    in={state.activeSubmenu === subItem.title}
                                  >
                                    <ul
                                      className={`sub-menu ${item.classChange === "mm-collapse" ? "open" : ""}`}
                                    >
                                      {subItem.content.map(
                                        (childItem, childIndex) => (
                                          <li key={childIndex}>
                                            <Link href={childItem.to}>
                                              {childItem.title}
                                            </Link>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </Collapse>
                                </>
                              ) : (
                                <Link href={subItem.to}>{subItem.title}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </Collapse>
                    </>
                  ) : (
                    <Link href={item.to}>{item.title}</Link>
                  )}
                </li>
              ))}
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
