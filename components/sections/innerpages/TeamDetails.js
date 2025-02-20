import Link from "next/link";

const TeamDetails = () => {
    return (
        <>
            <section className="team-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="image-box">
                                <img src="/images/team/team-1.jpg" alt="Team Member" />
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="content-box">
                                <h2>John Anderson</h2>
                                <span className="designation">Chief Operations Officer</span>
                                <div className="text">
                                    <p>John Anderson brings over 15 years of experience in air transport and logistics management. He has successfully led numerous international projects and has been instrumental in implementing innovative solutions in air cargo operations.</p>
                                    <p>His expertise includes:</p>
                                    <ul>
                                        <li>Strategic Operations Management</li>
                                        <li>International Logistics</li>
                                        <li>Supply Chain Optimization</li>
                                        <li>Team Leadership</li>
                                    </ul>
                                </div>
                                <div className="info-list">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><span>Experience:</span> 15+ Years</li>
                                                <li><span>Email:</span> john.anderson@example.com</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li><span>Expertise:</span> Operations & Logistics</li>
                                                <li><span>Phone:</span> +1 234 567 8900</li>
                                            </ul>
                                        </div>
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

export default TeamDetails;
