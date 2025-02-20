import Link from "next/link";

const ShopCheckout = () => {
    return (
        <>
            <section className="checkout-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="billing-details">
                                <h3>Billing Details</h3>
                                <form className="default-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="First Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Last Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" placeholder="Email Address *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Company Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Address *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Phone *" required />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <div className="order-box">
                                    <ul className="order-list">
                                        <li>
                                            <span>Product</span>
                                            <span>Total</span>
                                        </li>
                                        <li>Express Air Freight × 1<span>$150.00</span></li>
                                        <li>Priority Shipping × 2<span>$300.00</span></li>
                                        <li className="total">Total<span>$450.00</span></li>
                                    </ul>
                                    <div className="payment-options">
                                        <div className="option-block">
                                            <input type="radio" name="payment" id="card" defaultChecked />
                                            <label htmlFor="card">Credit Card</label>
                                        </div>
                                        <div className="option-block">
                                            <input type="radio" name="payment" id="paypal" />
                                            <label htmlFor="paypal">PayPal</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="theme-btn btn-style-one">
                                        <span>Place Order</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopCheckout;
