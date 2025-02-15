import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ReactSlider from 'react-slider';

const Contact1 = () => {
    return (
        <>
        <section className="contact-section p-0">
          <div className="icon-container"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row g-0">

                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight">
                  <div className="inner-column">
                    <div className="icon-arrow"></div>
                    <div className="sec-title">
                      <span className="sub-title">Reach Us Now</span>
                      <h2 className="scrub-each-word text-split">Take full control on shipping</h2>
                      <div className="text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</div>
                    </div>
                    <div className="row">

                      <div className="feature-block-two col-lg-4 col-md-4 col-sm-4">
                        <div className="inner-box">
                          <i className="icon fa fa-check"></i>
                          <div className="content">
                            <h5 className="title">Tracking <br />made easy</h5>
                          </div>
                        </div>
                      </div>

                      <div className="feature-block-two col-lg-4 col-md-4 col-sm-4">
                        <div className="inner-box">
                          <i className="icon fa fa-check"></i>
                          <div className="content">
                            <h5 className="title">Multiple <br /> warehouses</h5>
                          </div>
                        </div>
                      </div>

                      <div className="feature-block-two col-lg-4 col-md-4 col-sm-4">
                        <div className="inner-box">
                          <i className="icon fa fa-check"></i>
                          <div className="content">
                            <h5 className="title">Quick <br />fast process</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                  <div className="inner-column">
                    <div className="contact-form">
                      <form method="post" action="get" id="contact-form">
                        <div className="row">

                          <div className="form-group col-lg-12 col-md-12">
                            <label>Your Name:</label>
                            <input type="text" name="name" required/>
                          </div>

                          <div className="form-group col-lg-6 col-md-6">
                            <label>Your Email:</label>
                            <input type="email" name="email" required/>
                          </div>

                          <div className="form-group col-lg-6 col-md-6">
                            <label>Phone No:</label>
                            <input type="tel" name="phone" required/>
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <div className="range-slider-one">
                              <label className="mb-30">Dist (Miles):</label>
                              <ReactSlider
                                className="horizontal-slider form-group mb-4"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                defaultValue={[0, 35, 100]}
                                ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                renderThumb={(props, state) => <span {...props}>{state.valueNow}</span>}
                                pearling
                                minDistance={1}
                              />
                            </div>
                          </div>

                          <div className="form-group col-lg-6 col-md-6 col-sm-6">
                            <label>Freight Type:</label>
                            <select className="custom-select">
                              <option value="">Select</option>
                              <option value="">Air Freight</option>
                              <option value="">Sea Freight</option>
                              <option value="">Road Freight</option>
                            </select>
                          </div>

                          <div className="form-group col-lg-6 col-md-6 col-sm-6">
                            <label>Load</label>
                            <select className="custom-select">
                              <option value="">Select</option>
                              <option value="">Air Freight</option>
                              <option value="">Sea Freight</option>
                              <option value="">Road Freight</option>
                            </select>
                          </div>

                          <div className="form-group col-lg-12">
                            <button type="submit" className="theme-btn btn-style-one bg-dark" name="submit-form"><span className="btn-title">Submit request</span></button>
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
        </>
    );
};
export default Contact1