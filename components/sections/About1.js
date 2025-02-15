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
                      <span className="sub-title">Welcome Here</span>
                      <h2 className="scrub-each-word text-split">We provide full range <br />of transportation</h2>
                      <div className="text">There are many variations of passages of Lorem Ipsum available majority have suffered alteration in some form, by or randomised words which don’t look even slightly believable.</div>
                    </div>
                    <div className="list-outer-box">
                      <div className="list-box">
                        <ul className="list-style-two">
                          <li><i className="fa fa-plane"></i> Urgent transport solutions</li>
                          <li><i className="fa fa-plane"></i> Quality services reasonable price</li>
                          <li><i className="fa fa-plane"></i> Reliable & experienced staffs</li>
                        </ul>
                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                      </div>

                      <div className="exp-box">
                        <i className="icon flaticon-delivery-courier"></i>
                        <h6 className="title">Meet Our <br />Expert Agents</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="icon-shape-2"></div>
                    <figure className="image overlay-anim"><img src="images/resource/about1-1.jpg" alt="Image"/></figure>
                    <figure className="image-2 overlay-anim"><img src="images/resource/about1-2.jpg" alt="Image"/></figure>
                    <div className="exp-box">
                      <div className="icon-map"></div>
                      <h1 className="count">89<sup>+</sup></h1>
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