import Link from "next/link"
const About1 = () => {
    return (
      <>
        <section className="about-section">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">About Us</span>
                    <h2 className="scrub-each-word text-split">Our Mission:</h2>
                    <div className="text">
                     Tachyon Logistics created by the same group behind Pet Pros Services, inspired by the need for faster, more affordable shipping options. Bringing the same dedication to excellence, we deliver efficient, no-excuse service at competitive prices. 
                    </div>
                  </div>
                  <div className="list-outer-box">
                    <div className="list-box">
                      <ul className="list-style-two">
                        <li>
                          <i className="fa fa-plane"></i>We offer fast
                          deliveries with guaranteed delivery times, so you can
                          rest assured your goods will arrive when promised.
                        </li>
                        <li>
                          <i className="fa fa-plane"></i>Our team ensures smooth
                          and secure logistics for every shipment, so you never
                          have to worry.
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> We understand that
                          your time is valuable, which is why we offer a refund
                          policy for delays – because we keep our promises.
                        </li>
                        <li>
                          <i className="fa fa-plane"></i>Whether you're sending
                          a package or managing large-scale freight, we handle
                          everything for you, so you can focus on what matters
                          most.
                        </li>
                      </ul>
                      <Link
                        href="page-about"
                        className="theme-btn btn-style-one"
                      >
                        <span className="btn-title">Discover More</span>
                      </Link>
                    </div>

                    {/* <div className="exp-box">
                      <i className="icon flaticon-delivery-courier"></i>
                      <h6 className="title">What Sets Us Apart:</h6>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="icon-shape-2"></div>
                  <figure className="image overlay-anim">
                    <img src="images/resource/about1-1.jpg" alt="Image" />
                  </figure>
                  <figure className="image-2 overlay-anim">
                    <img src="images/resource/about1-2.jpg" alt="Image" />
                  </figure>
                  <div className="exp-box">
                    <div className="icon-map"></div>
                    <h1 className="count">
                      89<sup>+</sup>
                    </h1>
                    <h6 className="title">Locations World Wide</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
export default About1