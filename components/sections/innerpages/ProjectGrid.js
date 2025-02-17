import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Subscription1 from "../Subscription1";
import Contact1 from "../Contact1";
const Tracknow = () => {
  return (
    <>
      <section className="project-section-two">
        <div className="large-container">
          {/* <Subscription1 /> */}
          <Contact1 />
        </div>
      </section>
    </>
  );
};
export default Tracknow;