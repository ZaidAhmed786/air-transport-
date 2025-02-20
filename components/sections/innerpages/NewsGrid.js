import Link from "next/link";

const NewsGrid = () => {
    return (
        <>
            <section className="news-section">
                <div className="auto-container">
                    <div className="row">
                        {/* News Item 1 */}
                        <div className="col-lg-4 col-md-6 news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/news-details">
                                        <img src="/images/resource/news-1.jpg" alt="News" />
                                    </Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Aviation</div>
                                    <h4>
                                        <Link href="/news-details">
                                            Innovation in Air Transport Technology
                                        </Link>
                                    </h4>
                                    <div className="text">
                                        Exploring the latest technological advancements in air transport...
                                    </div>
                                    <div className="post-meta">
                                        <Link href="/news-details">
                                            <i className="far fa-calendar-alt"></i> Feb 20, 2025
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Item 2 */}
                        <div className="col-lg-4 col-md-6 news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/news-details">
                                        <img src="/images/resource/news-2.jpg" alt="News" />
                                    </Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Logistics</div>
                                    <h4>
                                        <Link href="/news-details">
                                            Sustainable Air Transport Solutions
                                        </Link>
                                    </h4>
                                    <div className="text">
                                        Implementing eco-friendly practices in air transport...
                                    </div>
                                    <div className="post-meta">
                                        <Link href="/news-details">
                                            <i className="far fa-calendar-alt"></i> Feb 18, 2025
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Item 3 */}
                        <div className="col-lg-4 col-md-6 news-block">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/news-details">
                                        <img src="/images/resource/news-3.jpg" alt="News" />
                                    </Link>
                                </div>
                                <div className="lower-content">
                                    <div className="category">Business</div>
                                    <h4>
                                        <Link href="/news-details">
                                            Global Air Transport Market Trends
                                        </Link>
                                    </h4>
                                    <div className="text">
                                        Analysis of current market trends in air transport...
                                    </div>
                                    <div className="post-meta">
                                        <Link href="/news-details">
                                            <i className="far fa-calendar-alt"></i> Feb 15, 2025
                                        </Link>
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

export default NewsGrid;
