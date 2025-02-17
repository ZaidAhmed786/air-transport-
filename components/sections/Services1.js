import Link from "next/link"
const Services1 = () => {
    return (
      <>
        <section className="service-section pull-up">
          <div className="bg bg-pattern-2"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">Our All Services</span>
              <h2 className="scrub-each-word text-split">
                We’re offering special <br />
                logistics services
              </h2>
            </div>
            <div className="row">
              <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <figure className="image">
                    <img src="images/resource/service1-1.jpg" alt="Image" />
                    <img src="images/resource/service1-1.jpg" alt="Image" />
                  </figure>
                  <div className="content">
                    <div className="bg-color"></div>
                    <i className="icon flaticon-air"></i>
                    <h4 className="title">Air Cargo</h4>
                    <div className="text">
                      "Need it there fast? Our air cargo services are designed
                      to get your shipments to their destination quickly and
                      securely. With strategic partnerships with major airlines
                      and air hubs, we offer expedited services for both
                      domestic and international shipments."
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="inner-box">
                  <figure className="image">
                    <img src="images/resource/service1-2.jpg" alt="Image" />
                    <img src="images/resource/service1-2.jpg" alt="Image" />
                  </figure>
                  <div className="content">
                    <div className="bg-color"></div>
                    <i className="icon flaticon-cargo-boat"></i>
                    <h4 className="title">Freight Forwarding</h4>
                    <div className="text">
                      "Our freight forwarding services are designed to simplify
                      global logistics. From managing all the paperwork to
                      coordinating shipments by sea, land, or air, we handle it
                      all to ensure a smooth process from start to finish."
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="inner-box">
                  <figure className="image">
                    <img src="images/resource/service1-3.jpg" alt="Image" />
                    <img src="images/resource/service1-3.jpg" alt="Image" />
                  </figure>
                  <div className="content">
                    <div className="bg-color"></div>
                    <i className="icon flaticon-truck"></i>
                    <h4 className="title">Hassle-Free</h4>
                    <div className="text">
                      Shipments "At [Your Company Name], we believe in removing
                      the headaches from logistics. Whether it's a personal
                      shipment or a business order, we take care of everything
                      for you – from tracking to delivery. It's that simple."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
export default Services1