import Link from "next/link"
const About2T2 = () => {
    return (
        <>
        <section className="about-section-four">
          <div className="icon-map-2"></div>
          <div className="icon-plane-4"></div>
          <div className="icon-bus bounce-x"></div>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeIRight">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Welcome Here</span>
                    <h2 className="scrub-each-word text-split">Total Coverage & <br />Flexibility in Transport</h2>
                  </div>
                  <div className="icon-box">
                    <i className="icon flaticon-delivery-courier"></i>
                    <h5 className="title">The Best Service for Business People <br />Who Appreciate Time</h5>
                  </div>
                  <div className="text">There are many variations of simply free text passages of available but the majority have suffered alteration in some form dolor sit amet, simply free text available in consec</div>
                  <ul className="list-style-two">
                    <li><i className="fa fa-plane"></i> Urgent transport solutions</li>
                    <li><i className="fa fa-plane"></i> Quality services reasonable price</li>
                  </ul>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                    <div className="author-box">
                      <div className="image"><img src="images/resource/about4-thumb1.jpg" alt="Image"/></div>
                      <div className="author-info">
                        <h5 className="name">Aleesha Brown</h5>
                        <span className="designation">CEO & CO Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image overlay-anim"><img src="images/resource/about4-1.jpg" alt="Image"/></figure>
                  <figure className="image-2 overlay-anim"><img src="images/resource/about4-2.jpg" alt="Image"/></figure>
                  <div className="exp-box">
                    <span className="count">36</span>
                    <div className="text">Years of <br />Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About2T2