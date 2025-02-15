import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay:8500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: true
    };
const Banner2 = () => {
    return (
        <>
        <section className="banner-section">
            <div className="icon-car"></div>
                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}></div>
                        <div className="bg-shape"></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">We’re Global <br />Logistics Providers</h1>
                                <div className="text">System is a term used to refer to an organized collection symbols and processes <br />that may be used to operate on such symbols.</div>
                                <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}></div>
                        <div className="bg-shape"></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">We’re Global <br />Logistics Providers</h1>
                                <div className="text">System is a term used to refer to an organized collection symbols and processes <br />that may be used to operate on such symbols.</div>
                                <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        </>
    );
};
export default Banner2