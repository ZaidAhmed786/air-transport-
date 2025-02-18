import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: true,
  effect: "fade",
  speed: 2000,
};

const Slider1 = () => {
  return (
    <>
      <section className="main-slider">
        <div className="outer-box">
          <Swiper {...swiperOptions}>
            <SwiperSlide className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(/images/main-slider/1.jpg)" }}
              ></div>
              <div className="tp-dottedoverlay on"></div>
              <div className="auto-container content-box pt-100 pb-100">
                <div className="row">
                  <div className="content-column col-lg-12 col-md-12 col-sm-12 pt-100">
                    <h1
                      className="animate-2"
                      style={{
                        fontSize: "4rem",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(90deg, transparent 50%, red 50%)",
                        backgroundSize: "200% 100%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "white",
                      }}
                    >
                      Welcome TO
                      <span
                        style={{
                          fontSize: "4rem",
                          fontWeight: "bold",
                          background:
                            "linear-gradient(90deg, transparent 50%, red 50%)",
                          backgroundSize: "200% 100%",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          WebkitTextStroke: "2px red",
                          animation: "fillText 4s linear infinite",
                        }}
                      >
                        {" "}
                        TACHYON
                      </span>
                    </h1>
                    <span className="sub-title animate-1">
                      At tachyon logistics, we understand that time is money.
                      That’s why we provide fast, reliable,
                      <br /> and hassle-free delivery services. Whether you're a
                      business or a consumer, we ensure your <br />
                      shipments get to their destination – on time, or your
                      money back.
                    </span>
                    <div className="btn-box mt-50">
                      <div className="btn-outer">
                        <Link
                          href="page-contact"
                          className="theme-btn btn-style-one animate-3"
                        >
                          <span className="btn-title">Get Started</span>
                        </Link>
                      </div>
                    </div>
                    <div className="icon-plane bounce-x animate-4"></div>
                  </div>
                  <div className="image-column col-lg-5 col-md-12 col-sm-12"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(/images/main-slider/1.jpg)" }}
              ></div>
              <div className="tp-dottedoverlay on"></div>
              <div className="auto-container content-box pt-100 pb-100">
                <div className="row">
                  <div className="content-column col-lg-12 col-md-12 col-sm-12 pt-100">
                    <h1
                      className="animate-2"
                      style={{
                        fontSize: "4rem",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(90deg, transparent 50%, red 50%)",
                        backgroundSize: "200% 100%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "white",
                      }}
                    >
                      Welcome TO
                      <span
                        style={{
                          fontSize: "4rem",
                          fontWeight: "bold",
                          background:
                            "linear-gradient(90deg, transparent 50%, red 50%)",
                          backgroundSize: "200% 100%",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          WebkitTextStroke: "2px red",
                          animation: "fillText 4s linear infinite",
                        }}
                      >
                        {" "}
                        TACHYON
                      </span>
                    </h1>
                    <span className="sub-title animate-1">
                      At tachyon logistics, we understand that time is money.
                      That’s why we provide fast, reliable,
                      <br /> and hassle-free delivery services. Whether you're a
                      business or a consumer, we ensure your <br />
                      shipments get to their destination – on time, or your
                      money back.
                    </span>
                    <div className="btn-box mt-50">
                      <div className="btn-outer">
                        <Link
                          href="page-contact"
                          className="theme-btn btn-style-one animate-3"
                        >
                          <span className="btn-title">Get Started</span>
                        </Link>
                      </div>
                    </div>
                    <div className="icon-plane bounce-x animate-4"></div>
                  </div>
                  <div className="image-column col-lg-5 col-md-12 col-sm-12"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Define Animation in Global CSS */}
      <style jsx global>{`
        @keyframes fillText {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </>
  );
};

export default Slider1;
