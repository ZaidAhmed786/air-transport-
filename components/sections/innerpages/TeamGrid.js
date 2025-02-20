import Link from "next/link";

const TeamGrid = () => {
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Team Member 1 */}
                        <div className="col-lg-4 col-md-6 team-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/team/team-1.jpg" alt="Team Member" />
                                    <div className="social-links">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/page-team-details">John Anderson</Link></h4>
                                    <div className="designation">Chief Operations Officer</div>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="col-lg-4 col-md-6 team-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/team/team-2.jpg" alt="Team Member" />
                                    <div className="social-links">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/page-team-details">Sarah Wilson</Link></h4>
                                    <div className="designation">Logistics Manager</div>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="col-lg-4 col-md-6 team-block">
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/team/team-3.jpg" alt="Team Member" />
                                    <div className="social-links">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <h4><Link href="/page-team-details">Michael Brown</Link></h4>
                                    <div className="designation">Fleet Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamGrid;
