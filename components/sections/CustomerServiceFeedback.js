import React, { useState } from "react";

const CustomerServiceFeedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      rating,
      feedback,
    };
    console.log("Feedback Data:", formData);
  };

  return (
    <section className="contact-section p-0">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row g-0">
            <div className="content-column col-lg-12 col-md-12 col-sm-12 wow ">
              <div className="inner-column">
                <div className="icon-arrow"></div>
                <div className="sec-title">
                  <span className="sub-title">Customer Service</span>
                  <h2 className="scrub-each-word text-split">
                    Feedback and Reviews
                  </h2>
                  <div className="text">
                    We value your feedback and aim to continuously improve our
                    services. Whether you’re a guest or a Tachyon account
                    holder, let us know how we did and rate your experience!
                  </div>
                </div>
              </div>
            </div>
            <div className="form-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="contact-form">
                  <form
                    method="post"
                    onSubmit={handleSubmit}
                    id="feedback-form"
                  >
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Name*</label>
                        <input
                          type="text"
                          placeholder="E.g. John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          placeholder="E.g. john@doe.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group col-lg-12 col-md-12">
                        <label>Rate Us</label>
                        <div className="rating">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                            <span
                              key={star}
                              style={{
                                fontSize: "32px", 
                                cursor: "pointer",
                                color:
                                  star <= (hoverRating || rating)
                                    ? "#ffcc00"
                                    : "#ccc",
                                transition: "color 0.2s",
                              }}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)} 
                              onClick={() => setRating(star)} 
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="form-group col-lg-12 col-md-12">
                        <label>Feedback*</label>
                        <textarea
                          placeholder="Please write your feedback"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group col-lg-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one bg-dark"
                          name="submit-form"
                        >
                          <span className="btn-title">Send Message</span>
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
  );
};

export default CustomerServiceFeedback;
