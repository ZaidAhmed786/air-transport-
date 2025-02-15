import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Progress2 = () => {
    return (
        <>
            <section className="features-section-two pt-0">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/3.jpg)' }}></div>
                <div className="auto-container">
                <div className="row">
                    
                    <div className="blocks-column col-lg-9 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="sec-title">
                        <span className="sub-title">Why choose us</span>
                        <h2 className="scrub-each-word text-split">We create opportunity <br />to reach potential</h2>
                        <div className="text">There are many variations of simply free text passages of available but the <br />majority have suffered alteration in some form.</div>
                        </div>
                        <div className="skills">
                        <div className="skill-item">
                            <div className="skill-header">
                            <div className="skill-title">Transport</div>
                            </div>
                            <div className="skill-bar">
                            <div className="bar-inner">
                                <div className="bar progress-line" style={{width:"78%"}}></div>
                                <div className="skill-percentage">
                                <div className="count-box"><CounterUp count={78} time={3} />%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">

                        <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                            <i className="icon flaticon-checklist"></i>
                            <span className="count">01</span>
                            <h5 className="title">Cost <br />Optimization</h5>
                            </div>
                        </div>
                        
                        <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                            <i className="icon flaticon-order"></i>
                            <span className="count">02</span>
                            <h5 className="title">Reduce <br />Transit Timing</h5>
                            </div>
                        </div>
                        
                        <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                            <i className="icon flaticon-import"></i>
                            <span className="count">03</span>
                            <h5 className="title">Warehouse <br />Operation</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="image-column col-lg-3 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <figure className="image reveal"><img src="images/resource/feature2-1.png" alt="Image"/></figure>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};
export default Progress2
