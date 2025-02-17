import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video1 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
      <>
        <section className="video-section">
          <div
            className="bg bg-image"
            style={{ backgroundImage: "url(images/background/1.jpg)" }}
          ></div>
          <div className="icon-shape"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="video-box">
                <h1 className="title scrub-each-word text-split">
                  Looking for the best <br />
                  logistics transport service?
                </h1>
                {/* <a onClick={() => setOpen(true)} className="play-btn">
                  <i className="icon fa fa-play" aria-hidden="true"></i>
                </a> */}
              </div>
            </div>
          </div>
        </section>
        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}
      </>
    );
};
export default Video1
