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

import logoImage from "@/public/images/logo-test.jpg";

const HomeHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const mainMenu = document.getElementById("OpenMenu");

    if (mainMenu) {
      if (sidebarOpen) {
        mainMenu.classList.add("show");
      } else {
        mainMenu.classList.remove("show");
      }
    }
  });

  // Menu dropdown list
  const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
  });
  const initialState = {
    active: "",
    activeSubmenu: "",
  };
  const [state, setState] = useReducer(reducer, initialState);
  const handleMenuActive = (status) => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  };
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  function AddActiveMenu() {
    MENU_ITEMS?.forEach((ell) => {
      if (ell.to === pathname) {
        setActiveMenu(ell.title);
      }
      ell.content?.forEach((ele) => {
        if (ele.to === pathname) {
          setActiveMenu(ell.title);
        }
      });
    });
  }

  useMemo(AddActiveMenu, [pathname]);

  return (
    <>
      <div className="main-bar clearfix">
        <div className="container clearfix">
          <div className="box-header clearfix">
            <div className="logo-header mostion logo-dark">
              <Link href={"/"}>
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
              className={`navbar-toggler navicon justify-content-end ${
                sidebarOpen ? "open" : "collapsed"
              }`}
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav
              id="navbarNavDropdown"
              className={`header-nav navbar-collapse collapse justify-content-around ${
                sidebarOpen ? "show" : ""
              }`}
            >
              <div className="logo-header logo-dark">
                <Link href={"/"}>
                  <Image
                    src={logoImage}
                    quality={100}
                    alt="Logo"
                    title="Zantaraia school logo"
                  />
                </Link>
              </div>
              <ul className="nav navbar-nav navbar navbar-left">
                {MENU_ITEMS.map((item, index) => {
                  let menuClass = item.classChange;
                  if (menuClass !== "sub-menu-down") {
                    return (
                      <li
                        className={`${menuClass} ${
                          item.title === activeMenu ? "active" : ""
                        }`}
                        // className={`${ menuClass} ${ location.pathname == item.to ? 'active'  : '' }`}
                        key={index}
                      >
                        <Link href={item.to}>{item.title}</Link>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        className={`${menuClass} ${
                          state.active === item.title ? "open active" : ""
                        } ${item.title === activeMenu ? "active" : ""}`}
                        // <li className={`${ menuClass} ${ location.pathname == item.to ? 'active'  : '' }`}
                        key={index}
                      >
                        {item.content && item.content.length > 0 ? (
                          <>
                            <Link
                              href={"#"}
                              onClick={() => {
                                handleMenuActive(item.title);
                              }}
                            >
                              {item.title}
                            </Link>
                            <Collapse in={state.active === item.title}>
                              <ul
                                className={`sub-menu ${
                                  menuClass === "mm-collapse" ? "open" : ""
                                }`}
                              >
                                {item.content &&
                                  item.content.map((data, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className={`${
                                          state.activeSubmenu === data.title
                                            ? "open"
                                            : ""
                                        }`}
                                        //className={`${ menuClass} ${ location.pathname == data.to ? 'active'  : '' }`}
                                      >
                                        {data.content &&
                                        data.content.length > 0 ? (
                                          <>
                                            <Link
                                              href={data.to}
                                              onClick={() => {
                                                handleSubmenuActive(data.title);
                                              }}
                                            >
                                              {data.title}
                                              <FontAwesomeIcon
                                                icon={faAngleRight}
                                              />
                                            </Link>
                                            <Collapse
                                              in={
                                                state.activeSubmenu ===
                                                data.title
                                              }
                                            >
                                              <ul
                                                className={`sub-menu ${
                                                  menuClass === "mm-collapse"
                                                    ? "open"
                                                    : ""
                                                }`}
                                              >
                                                {data.content &&
                                                  data.content.map(
                                                    (data, index) => {
                                                      return (
                                                        <>
                                                          <li key={index}>
                                                            <Link
                                                              href={data.to}
                                                            >
                                                              {data.title}
                                                            </Link>
                                                          </li>
                                                        </>
                                                      );
                                                    },
                                                  )}
                                              </ul>
                                            </Collapse>
                                          </>
                                        ) : (
                                          <Link href={data.to}>
                                            {data.title}
                                          </Link>
                                        )}
                                      </li>
                                    );
                                  })}
                              </ul>
                            </Collapse>
                          </>
                        ) : (
                          <Link href={item.to}>{item.title}</Link>
                        )}
                      </li>
                    );
                  }
                })}
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
                  </li>{" "}
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/zantaraia_school"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </li>{" "}
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
    </>
  );
};

export default HomeHeader;
