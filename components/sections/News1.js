import Link from "next/link"
const News1 = () => {
    return (
        <>
        <section className="news-section">
          <div className="icon-plane-3 bounce-y"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">From Blog Posts</span>
              <h2 className="scrub-each-word text-split">News & articles</h2>
            </div>
            <div className="row">

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
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

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
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

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
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
            </div>
          </div>
        </section>
        </>
    );
};
export default News1