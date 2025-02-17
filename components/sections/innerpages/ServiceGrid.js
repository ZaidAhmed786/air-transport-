import Link from 'next/link';

const ServiceGrid = () => {
  return (
    <>
      <section className="service-section">
        <div className="auto-container">
          <div className="row">
            <div className="service-block col-lg-6 col-md-6 wow fadeInUp">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/resource/service1-1.jpg" alt="Image" />
                  <img src="images/resource/service1-1.jpg" alt="Image" />
                </figure>
                <div className="content">
                  <div className="bg-color"></div>
                  <i className="icon flaticon-air"></i>
                  <h4 className="title">
                    <Link href="page-service-details">Air Cargo</Link>
                  </h4>
                  <div className="text">
                    Need it there fast? Our air cargo services are designed to
                    get your shipments to their destination quickly and
                    securely. With strategic partnerships with major airlines
                    and air hubs, we offer expedited services for both domestic
                    and international shipments.
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="service-block col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="inner-box">
                <figure className="image">
                  <img src="images/resource/service1-2.jpg" alt="Image" />
                  <img src="images/resource/service1-2.jpg" alt="Image" />
                </figure>
                <div className="content">
                  <div className="bg-color"></div>
                  <i className="icon flaticon-cargo-boat"></i>
                  <h4 className="title">
                    <Link href="page-service-details">Sea </Link>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, simply free text available in
                    the consectetur adipiscing.
                  </div>
                </div>
              </div>
            </div> */}
            <div
              className="service-block col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <figure className="image">
                  <img src="images/resource/service1-3.jpeg" alt="Image" />
                  <img src="images/resource/service1-3.jpeg" alt="Image" />
                </figure>
                <div className="content">
                  <div className="bg-color"></div>
                  <i className="icon flaticon-truck"></i>
                  <h4 className="title">
                    <Link href="page-service-details">Freight Forwarding</Link>
                  </h4>
                  <div className="text">
                    Our freight forwarding services are designed to simplify
                    global logistics. From managing all the paperwork to
                    coordinating shipments by sea, land, or air, we handle it
                    all to ensure a smooth process from start to finish.
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="service-block col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                <figure className="image">
                  <img src="images/resource/service1-2.jpg" alt="Image" />
                  <img src="images/resource/service1-2.jpg" alt="Image" />
                </figure>
                <div className="content">
                  <div className="bg-color"></div>
                  <i className="icon flaticon-cargo-boat"></i>
                  <h4 className="title">
                    <Link href="page-service-details">Sea Transport</Link>
                  </h4>
                  <div className="text">
                    Lorem ipsum dolor sit amet, simply free text available in
                    the consectetur adipiscing.
                  </div>
                </div>
              </div>
            </div> */}
            <div
              className="service-block col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="inner-box">
                <figure className="image">
                  <img src="images/resource/service1-3.jpeg" alt="Image" />
                  <img src="images/resource/service1-3.jpeg" alt="Image" />
                </figure>
                <div className="content">
                  <div className="bg-color"></div>
                  <i className="icon flaticon-truck"></i>
                  <h4 className="title">
                    <Link href="page-service-details">
                      Hassle-Free Shipments
                    </Link>
                  </h4>
                  <div className="text">
                    At [Your Company Name], we believe in removing the headaches
                    from logistics. Whether it's a personal shipment or a
                    business order, we take care of everything for you – from
                    tracking to delivery. It's that simple.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="service-block col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="inner-box">
                <figure className="image">
                  <img src="images/resource/service1-1.jpg" alt="Image" />
                  <img src="images/resource/service1-1.jpg" alt="Image" />
                </figure>
                <div className="content">
                  <div className="bg-color"></div>
                  <i className="icon flaticon-air"></i>
                  <h4 className="title">
                    <Link href="page-service-details">Refund Policy</Link>
                  </h4>
                  <div className="text">
                    We know how important it is to meet deadlines, which is why
                    we offer a refund policy to guarantee that your goods will
                    arrive on time. If your shipment is delayed beyond the
                    committed time, you’ll receive a full refund. We stand by
                    our commitment to fast and reliable delivery.
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
export default ServiceGrid
