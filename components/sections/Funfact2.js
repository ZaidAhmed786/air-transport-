import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact2 = () => {
    return (
        <>
            <section className="funfact-section">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/5.jpg)' }}></div>
                <div className="auto-container">
                <div className="fact-counter">

                    <div className="counter-block-three">
                    <div className="inner-box">
                        <div className="content">
                        <img src="images/resource/counter3-1.png" alt="Image"/>
                        <div className="counter-one"><CounterUp count={45} time={3} />+</div>
                        </div>
                        <div className="counter-text">Branches Across the World</div>
                    </div>
                    </div>

                    <div className="counter-block-three">
                    <div className="inner-box">
                        <div className="content">
                        <img src="images/resource/counter3-2.png" alt="Image"/>
                        <div className="counter-one"><CounterUp count={36} time={3} />k</div>
                        </div>
                        <div className="counter-text">Parcel Delivered by Riders</div>
                    </div>
                    </div>

                    <div className="counter-block-three">
                    <div className="inner-box">
                        <div className="content">
                        <img src="images/resource/counter3-3.png" alt="Image"/>
                        <div className="counter-one"><CounterUp count={78} time={3} />k</div>
                        </div>
                        <div className="counter-text">Tons of Products Transport</div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};
export default Funfact2
