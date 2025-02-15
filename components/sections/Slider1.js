import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import 'swiper/css/effect-fade';
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: true,
  effect:'fade',
  speed: 2000
};
const Slider1 = () => {
  return (
    <>
  <section className="main-slider">
    <div className="outer-box">
      <Swiper {...swiperOptions}>
        <SwiperSlide className="slide-item">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}></div>
          <div className="tp-dottedoverlay on"></div>
          <div className="auto-container content-box pt-100 pb-100">
              <div className="row">
                  <div className="content-column col-lg-7 col-md-12 col-sm-12 pt-100">
                    <span className="sub-title animate-1">Fast and reliable shipping</span>
                    <h1 className="animate-2">Cost Effective <br className="d-none d-lg-block"/> Digital Marketing <br className="d-none d-lg-block"/> Agency</h1>
                    <div className="btn-box mt-50">
                      <div className="btn-outer">
                        <Link href="page-contact" className="theme-btn btn-style-one animate-3"><span className="btn-title">Get Started</span></Link>
                      </div>
                    </div><div className="icon-plane bounce-x animate-4"></div>
                  </div>
                  <div className="image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="exp-box z-index-1 animate-5">
                        <span className="sub-title">Trusted by</span>
                        <h3 className="title">4890</h3>
                    </div>
                      <div className="image-box">
                          <figure className="image animate-5"><img src="/images/main-slider/bus.png" alt=""/>
                          </figure>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}></div>
          <div className="tp-dottedoverlay on"></div>
          <div className="auto-container content-box pt-100 pb-100">
              <div className="row">
                  <div className="content-column col-lg-7 col-md-12 col-sm-12 pt-100">
                    <span className="sub-title animate-1">Fast and reliable shipping</span>
                    <h1 className="animate-2">Cost Effective <br className="d-none d-lg-block"/> Digital Marketing <br className="d-none d-lg-block"/> Agency</h1>
                    <div className="btn-box mt-50">
                      <div className="btn-outer">
                        <Link href="page-contact" className="theme-btn btn-style-one animate-3"><span className="btn-title">Get Started</span></Link>
                      </div>
                    </div><div className="icon-plane bounce-x animate-4"></div>
                  </div>
                  <div className="image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="exp-box z-index-1 animate-5">
                        <span className="sub-title">Trusted by</span>
                        <h3 className="title">4890</h3>
                    </div>
                      <div className="image-box">
                          <figure className="image animate-5"><img src="/images/main-slider/bus.png" alt=""/>
                          </figure>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
    </>
  );
};
export default Slider1