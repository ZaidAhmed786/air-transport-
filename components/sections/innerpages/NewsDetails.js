import Link from "next/link";

const NewsDetails = () => {
    return (
        <>
            <section className="news-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="/images/resource/news-7.jpg" alt="" />
                                    </div>
                                    <div className="lower-content">
                                        <div className="category">Business</div>
                                        <h3>The Importance of Air Transport in Modern Logistics</h3>
                                        <ul className="post-meta">
                                            <li><i className="far fa-calendar-alt"></i>Feb 20, 2025</li>
                                            <li><i className="far fa-user"></i>By Admin</li>
                                            <li><i className="far fa-comments"></i>2 Comments</li>
                                        </ul>
                                        <div className="text">
                                            <p>Air transport plays a crucial role in modern logistics and global commerce. It enables rapid delivery of goods across continents, facilitates international trade, and supports just-in-time inventory systems. This article explores the key aspects of air transport and its impact on business operations.</p>
                                            <p>The advantages of air transport include speed, reliability, and security. For high-value or time-sensitive cargo, air transport is often the preferred choice. While it may be more expensive than other modes of transportation, the benefits often outweigh the costs for many businesses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget recent-news">
                                    <h4>Recent News</h4>
                                    <div className="widget-content">
                                        <div className="post">
                                            <h5><Link href="/news-details">Innovation in Air Cargo Technology</Link></h5>
                                            <span className="date">February 18, 2025</span>
                                        </div>
                                        <div className="post">
                                            <h5><Link href="/news-details">Sustainable Aviation Solutions</Link></h5>
                                            <span className="date">February 15, 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsDetails;
