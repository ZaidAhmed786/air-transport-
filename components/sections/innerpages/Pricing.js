import Link from "next/link";

const Pricing = () => {
    return (
        <>
            <section className="pricing-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Basic Plan */}
                        <div className="col-lg-4 col-md-6 pricing-block">
                            <div className="inner-box">
                                <div className="plan-header">
                                    <h4>Basic Plan</h4>
                                    <div className="price">$299<span>/month</span></div>
                                </div>
                                <div className="lower-content">
                                    <ul className="features">
                                        <li>Up to 1000kg cargo capacity</li>
                                        <li>Standard shipping time</li>
                                        <li>Basic tracking system</li>
                                        <li>Email support</li>
                                        <li>Regular updates</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/contact" className="theme-btn btn-style-one">
                                            <span>Choose Plan</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Plan */}
                        <div className="col-lg-4 col-md-6 pricing-block active">
                            <div className="inner-box">
                                <div className="plan-header">
                                    <h4>Professional</h4>
                                    <div className="price">$499<span>/month</span></div>
                                </div>
                                <div className="lower-content">
                                    <ul className="features">
                                        <li>Up to 5000kg cargo capacity</li>
                                        <li>Express shipping available</li>
                                        <li>Advanced tracking system</li>
                                        <li>24/7 phone support</li>
                                        <li>Priority handling</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/contact" className="theme-btn btn-style-one">
                                            <span>Choose Plan</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="col-lg-4 col-md-6 pricing-block">
                            <div className="inner-box">
                                <div className="plan-header">
                                    <h4>Enterprise</h4>
                                    <div className="price">$999<span>/month</span></div>
                                </div>
                                <div className="lower-content">
                                    <ul className="features">
                                        <li>Unlimited cargo capacity</li>
                                        <li>Custom shipping solutions</li>
                                        <li>Real-time tracking system</li>
                                        <li>Dedicated account manager</li>
                                        <li>Custom integration options</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/contact" className="theme-btn btn-style-one">
                                            <span>Choose Plan</span>
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

export default Pricing;
