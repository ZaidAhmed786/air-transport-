import Link from 'next/link';

const NewsGrid = () => {
  return (
    <>
    <section className="news-section pb-70">
      <div className="auto-container">
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
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
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
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
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
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
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
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="500ms">
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
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
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
        </div>
      </div>
    </section>

  {/* News Section */}
      
    </>
  );
};
export default NewsGrid
