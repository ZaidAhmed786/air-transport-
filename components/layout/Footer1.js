import Link from "next/link"

export default function Footer1() {
    return (
      <>
        <footer className="main-footer footer-style-one">
          <div
            className="bg bg-image"
            style={{ backgroundImage: "url(/images/background/4.jpg)" }}
          ></div>

          <div className="footer-top">
            <div className="auto-container">
              <div className="outer-box">
                <ul className="contact-list-two light">
                  <li>
                    <i className="icon flaticon-global-shipping-1"></i>
                    <div className="text">
                      Address <br /> <span>5104 N OBT Orlando, FL 32810</span>
                    </div>
                  </li>
                  <li>
                    <i className="icon flaticon-stock-1"></i>
                    <div className="text">
                      Contact <br />{" "}
                      <Link href="mailto:needhelp@company.com">
                        info@tachyonlogistics.net
                      </Link>{" "}
                      <Link href="tel:+888-973-8748 "> 888-973-8748 </Link>
                    </div>
                  </li>
                  <li>
                    <i className="icon flaticon-24-hours-2"></i>
                    <div className="text">
                      Timing <br />{" "}
                      <span>
                        Mon - Sat: 8 am - 5 pm, <br />
                        Sunday: CLOSED
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="widgets-section">
            <div className="auto-container">
              <div className="row">
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                      <Link href="#">
                        <img
                          style={{ padding: "20px" }}
                          src="images/logo.png"
                          alt="Logo"
                          width={"200px"}
                        />
                      </Link>
                    </div>
                    <div className="text">
                      We work with a passion of taking challenges and creating
                      new ones in advertising sector.
                    </div>
                    <Link
                      href="page-contact"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Contact Us</span>
                    </Link>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget newsletter-widget">
                    <h4 className="widget-title">Newsletter</h4>
                    <div className="text">
                      Subscribe our newsletter to get our latest update & news
                    </div>
                    <div className="newsletter-form">
                      <div className="form-group">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email....."
                          required
                        />
                        <button type="submit" className="form-btn">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container">
                <div className="copyright-text">
                  © Copyright 2025 | All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
