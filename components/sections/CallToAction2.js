import Link from "next/link"
const CallToAction2 = () => {
    return (
        <>
          <section className="call-to-action-two p-0">
            <div className="icon-plane-3"></div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/6.jpg)' }}></div>
                <div className="icon-shape-3"></div>
                <div className="content">
                  <h2 className="title scrub-each-word text-split">Looking for the best <br />logistics transport  service?</h2>
                  <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};
export default CallToAction2