const Subscription1 = () => {
    return (
        <>
          <section className="subscribe-section p-0">
            <div className="auto-container">
              <div className="outer-box wow fadeInLeft">
                <div className="icon-arrow-2"></div>
                <div className="icon-block"></div>
                <div className="title-box">
                  <h3 className="title">Track your <br />Order</h3>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <div className="row">
                      <div className="form-group col-lg-5 col-md-5">
                        <div className="input-outer">
                          <i className="icon fal fa-user"></i>
                          <input type="text" name="Tracking ID" placeholder="Your Tracking ID Now" required/>
                        </div>
                      </div>

                      <div className="form-group col-lg-5 col-md-5">
                        <div className="input-outer">
                          <i className="icon fal fa-envelope"></i>
                          <input type="email" name="email" placeholder="Your Email Address" required/>
                        </div>
                      </div>

                      <div className="form-group col-lg-2 col-md-2">
                        <button className="theme-btn btn-style-one"><span className="btn-title">Track Order</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};
export default Subscription1