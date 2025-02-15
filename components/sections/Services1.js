import Link from "next/link"
const Services1 = () => {
    return (
        <>
          <section className="service-section pull-up">
            <div className="bg bg-pattern-2"></div>
            <div className="auto-container">
              <div className="sec-title text-center">
                <span className="sub-title">Our All Services</span>
                <h2 className="scrub-each-word text-split">We’re offering special <br/>logistics services</h2>
              </div>
              <div className="row">

                <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-1.jpg" alt="Image"/>
                      <img src="images/resource/service1-1.jpg" alt="Image"/>
                    </figure>
                    <div className="content">
                      <div className="bg-color"></div>
                      <i className="icon flaticon-air"></i>
                      <h4 className="title"><Link href="page-service-details">Air Freight</Link></h4>
                      <div className="text">Lorem ipsum dolor sit amet, simply free text available in the consectetur adipiscing.</div>
                    </div>
                  </div>
                </div>

                <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-2.jpg" alt="Image"/>
                      <img src="images/resource/service1-2.jpg" alt="Image"/>
                    </figure>
                    <div className="content">
                      <div className="bg-color"></div>
                      <i className="icon flaticon-cargo-boat"></i>
                      <h4 className="title"><Link href="page-service-details">Sea Transport</Link></h4>
                      <div className="text">Lorem ipsum dolor sit amet, simply free text available in the consectetur adipiscing.</div>
                    </div>
                  </div>
                </div>

                <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner-box">
                    <figure className="image">
                      <img src="images/resource/service1-3.jpg" alt="Image"/>
                      <img src="images/resource/service1-3.jpg" alt="Image"/>
                    </figure>
                    <div className="content">
                      <div className="bg-color"></div>
                      <i className="icon flaticon-truck"></i>
                      <h4 className="title"><Link href="page-service-details">Road Transport</Link></h4>
                      <div className="text">Lorem ipsum dolor sit amet, simply free text available in the consectetur adipiscing.</div>
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