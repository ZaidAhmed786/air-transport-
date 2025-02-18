import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header2({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
    return (
      <>
        <header
          className={`main-header header-style-three ${
            isSearch ? "moblie-search-active" : ""
          }`}
        >
          <div className="header-top">
            <div className="top-left">
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-map-marker-alt"></i> 380 St Kilda Road,
                  Australia
                </li>
                <li>
                  <i className="fa fa-clock"></i> Mon - Sat: 8am - 5pm
                </li>
                <li>
                  <i className="fa fa-phone-volume"></i>{" "}
                  <Link href="tel:+888-973-8748 "> 888-973-8748 </Link>
                </li>
              </ul>
            </div>

            <div className="top-right">
              <ul className="social-icon-one">
                <li>
                  <Link href="#">
                    <span className="fab fa-facebook-square"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fab fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-lower">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="images/logo-3.png" alt="" title="Lozics" />
                  </Link>
                </div>
              </div>

              <div className="nav-outer">
                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <Menu />
                  </nav>

                  <div className="outer-box">
                    <button
                      className="ui-btn ui-btn search-btn"
                      onClick={handleSearch}
                    >
                      <span className="icon lnr lnr-icon-search"></span>
                    </button>

                    <Link href="shop-cart" className="ui-btn d-none d-md-block">
                      <i className="lnr-icon-shopping-cart"></i>
                    </Link>

                    <Link
                      href="page-contact"
                      className="theme-btn btn-style-one alternate hvr-light d-none d-md-block"
                    >
                      <span className="btn-title">Get A Quote</span>
                    </Link>

                    <div
                      className="mobile-nav-toggler"
                      onClick={handleMobileMenu}
                    >
                      <span className="icon lnr-icon-bars"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu  */}
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
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-phone-handset" />
                    <span className="title">Call Now</span>
                    <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                  </div>
                </li>
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-envelope1" />
                    <span className="title">Send Email</span>
                    <Link href="/mailto:help@company.com">
                      help@company.com
                    </Link>
                  </div>
                </li>
                <li>
                  {/* Contact Info Box */}
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-clock" />
                    <span className="title">Send Email</span>
                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                  </div>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <Link href="/#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <i className="fab fa-pinterest" />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* End Mobile Menu */}
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
          {/* End Header Search */}
          {/* Sticky Header  */}
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
                  {/* Main Menu */}
                  <nav className="main-menu">
                    <div className="navbar-collapse show collapse clearfix">
                      <Menu />
                    </div>
                  </nav>
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <span className="icon lnr-icon-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sticky Menu */}
        </header>
      </>
    );
}
