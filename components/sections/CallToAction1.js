import Link from "next/link"
const CallToAction1 = () => {
    return (
        <>
        <section className="call-to-action p-0">
          <div className="auto-container">
            <div className="outer-box wow fadeInLeft">
              <div className="bg bg-pattern-3"></div>
              <div className="icon-man"></div>

              <div className="title-box">
                <div className="inner-column">
                  <span className="sub-title">Quisque vel ortor</span>
                  <h3 className="title">Ready to send your parcel with us</h3>
                </div>
              </div>

              <div className="button-box">
                <Link href="page-contact" className="theme-btn btn-style-one bg-dark hover-light"><span className="btn-title">Discover More</span></Link>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default CallToAction1