import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}
};
const News2 = () => {
	return (
	<>
		<section className="news-section-two">
			<div className="icon-plane-2 bounce-y"></div>
			<div className="auto-container">
			<div className="row">
				
				<div className="content-column col-lg-4 col-md-12 col-sm-12">
				<div className="inner-column">
					<div className="sec-title">
					<span className="sub-title">From Blog Posts</span>
					<h2 className="scrub-each-word text-split">Latest news & articles</h2>
					</div>
				</div>
				</div>

				<div className="slider-column col-lg-8 col-md-12 col-sm-12">
				<div className="inner-column">
					<Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme default-dots">
						<SwiperSlide>
							<div className="news-block">
								<div className="inner-box">
								<div className="image-box">
									<figure className="image">
									<Link href="news-details">
										<img src="images/resource/news1-1.jpg" alt="Image"/>
										<img src="images/resource/news1-1.jpg" alt="Image"/>
									</Link>
									</figure>
								</div>
								<div className="content-box">
									<div className="date">28<span>July</span></div>
									<ul className="post-meta">
									<li><i className="fa fa-user-circle"></i>by Admin</li>
									<li><i className="fa fa-comment"></i>2 Comments</li>
									</ul>
									<h5 className="title"><Link href="news-details">We carefully handle the valueable goods</Link></h5>
									<Link className="read-more" href="news-details">Read More <i className="icon fa fa-angle-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="news-block">
								<div className="inner-box">
								<div className="image-box">
									<figure className="image">
									<Link href="news-details">
										<img src="images/resource/news1-2.jpg" alt="Image"/>
										<img src="images/resource/news1-2.jpg" alt="Image"/>
									</Link>
									</figure>
								</div>
								<div className="content-box">
									<div className="date">28<span>July</span></div>
									<ul className="post-meta">
									<li><i className="fa fa-user-circle"></i>by Admin</li>
									<li><i className="fa fa-comment"></i>2 Comments</li>
									</ul>
									<h5 className="title"><Link href="news-details">We carefully handle the valueable goods</Link></h5>
									<Link className="read-more" href="news-details">Read More <i className="icon fa fa-angle-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="news-block">
								<div className="inner-box">
								<div className="image-box">
									<figure className="image">
									<Link href="news-details">
										<img src="images/resource/news1-3.jpg" alt="Image"/>
										<img src="images/resource/news1-3.jpg" alt="Image"/>
									</Link>
									</figure>
								</div>
								<div className="content-box">
									<div className="date">28<span>July</span></div>
									<ul className="post-meta">
									<li><i className="fa fa-user-circle"></i>by Admin</li>
									<li><i className="fa fa-comment"></i>2 Comments</li>
									</ul>
									<h5 className="title"><Link href="news-details">We carefully handle the valueable goods</Link></h5>
									<Link className="read-more" href="news-details">Read More <i className="icon fa fa-angle-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="news-block">
								<div className="inner-box">
								<div className="image-box">
									<figure className="image">
									<Link href="news-details">
										<img src="images/resource/news1-1.jpg" alt="Image"/>
										<img src="images/resource/news1-1.jpg" alt="Image"/>
									</Link>
									</figure>
								</div>
								<div className="content-box">
									<div className="date">28<span>July</span></div>
									<ul className="post-meta">
									<li><i className="fa fa-user-circle"></i>by Admin</li>
									<li><i className="fa fa-comment"></i>2 Comments</li>
									</ul>
									<h5 className="title"><Link href="news-details">We carefully handle the valueable goods</Link></h5>
									<Link className="read-more" href="news-details">Read More <i className="icon fa fa-angle-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				</div>
			</div>
			</div>
		</section>
	</>
	);
};
export default News2