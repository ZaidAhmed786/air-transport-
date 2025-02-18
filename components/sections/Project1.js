import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// const swiperOptions = {
// 	modules: [Autoplay, Pagination, Navigation],
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	autoplay: {
// 		delay: 2500,
// 		disableOnInteraction: false,
// 	},
// 	navigation: true,
// 	loop: true,
// 	breakpoints:{
// 		320: {
// 			slidesPerView: 1,
// 			// spaceBetween: 30,
// 		},
// 		575: {
// 			slidesPerView: 1,
// 			// spaceBetween: 30,
// 		},
// 		767: {
// 			slidesPerView: 2,
// 			// spaceBetween: 30,
// 		},
// 		991: {
// 			slidesPerView: 2,
// 			// spaceBetween: 30,
// 		},
// 		1199: {
// 			slidesPerView: 4,
// 			// spaceBetween: 30,
// 		},
// 		1350: {
// 			slidesPerView: 4,
// 			// spaceBetween: 30,
// 		},
// 	}
// };
const Project1 = () => {
	return (
    <>
      <section className="project-section">
        <div className="icon-plane-2 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title mb-0">
            <span className="sub-title">Work Showcase</span>
            <h2 className="scrub-each-word text-split">Recent Portfolios</h2>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project1