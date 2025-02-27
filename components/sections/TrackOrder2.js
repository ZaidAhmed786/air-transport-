import React, { useState } from "react";
import TrackStatus from "./TrackStatus";

const TrackOrder2 = () => {
  const [showTrackStatus, setShowTrackStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTrackStatus(true); 
  };

  return (
    <>
      {!showTrackStatus ? ( 
        <section className="contact-section p-0">
          <div className="icon-container"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row g-0">
                <div
                  className="form-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <div className="inner-column">
                    <div className="contact-form">
                      <form
                        method="post"
                        onSubmit={handleSubmit}
                        id="contact-form"
                      >
                        <div className="row">
                          <div className="form-group col-lg-6 col-md-6 col-sm-12">
                            <label>Enter the Consignment No. Ex: 12345</label>
                            <input
                              type="text"
                              name="firstName"
                              placeholder="Enter Tracking Number"
                              required
                            />
                          </div>

                          <div className="form-group col-lg-6 col-md-6 col-sm-12 d-flex justify-content-start align-items-center">
                            <button
                              type="submit"
                              className="theme-btn btn-style-one bg-dark mt-3"
                              name="submit-form"
                            >
                              <span className="btn-title">Track Result</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <TrackStatus />
      )}
    </>
  );
};


export default TrackOrder2;
