import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef } from "react";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
}) {
  const bulletRef = useRef(null);

  useEffect(() => {
    // Animation will run once when the component mounts
    if (bulletRef.current) {
      bulletRef.current.style.animation = "moveBullet 2s forwards";
    }
  }, []);

  return (
    <>
      <header
        className={`main-header header-style-two ${
          isSearch ? "moblie-search-active" : ""
        }`}
      >
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              <ul className="list-style-one light">
                <li>
                  <i className="fa fa-map-marker-alt"></i> 10130 Londonshire
                  Lane Tampa, FL 33647
                </li>
                <li>
                  <i className="fa fa-clock"></i> Mon - Sat: 8am - 5pm
                </li>
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <Link href="tel:888-973-8748 ">888-973-8748 </Link>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="feature-ilst">
                {/* <li><Link href="#">Help</Link></li> */}
                {/* <li>
                  <Link href="../section/TrackOrder">Track Now</Link>
                </li> */}
                {/* <li><Link href="#">Support</Link></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="main-box">
            {/* Bullet Image with Animation */}
            <div
              style={{
                position: "relative",
                width: "45%",
                height: "auto", // Adjust height as needed
                // overflow: "hidden",
                marginRight: "2%",
              }}
            >
              <img
                ref={bulletRef}
                style={{
                  position: "absolute",
                  left: "-109px", 
                  top: "22%",
                  transform: "translateY(-50%)",
                  maxWidth: "200px", 
                  height: "auto",
                  zIndex: "1",
                  animation: "moveBullet 0s forwards", 
                }}
                src="images/bulit.png" 
                alt="Bullet"
              />

              <img
                className="p-md-5 p-sm-1 "
                style={{
                  maxWidth: "400px",
                  height: "auto",
                  backgroundColor: "white",

                  position: "relative",
                  // padding: "50px",
                  zIndex: "0",
                }}
                src="images/logo.png"
                alt="Logo"
                title="Lozics"
              />
            </div>
            <div className="nav-outer">
              <nav className="nav main-menu">
                <Menu />
              </nav>
            </div>

            <div className="outer-box">
              <div className="btn-box">
                <Link
                  href="page-contact"
                  className="theme-btn btn-style-one orange-bg"
                >
                  <span className="btn-title">Contact Us</span>
                </Link>
              </div>

              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleMobileMenu} />

          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <Link href="/tel:+888-973-8748 "> 888-973-8748 </Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <Link href="/mailto:help@company.com">
                    info@tachyonlogistics.net
                  </Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Send Email</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" onClick={handleSearch} />
          <button className="close-search" onClick={handleSearch}>
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Header */}
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <Menu />
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Define Animation in Global CSS */}
      <style jsx global>{`
        @keyframes moveBullet {
          0% {
            left: -100px; /* Start from outside the screen */
          }
          100% {
            left: calc(100% - 250px); /* Move to the end of the logo */
          }
        }
      `}</style>
    </>
  );
}
