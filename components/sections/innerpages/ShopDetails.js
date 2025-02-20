import { useState } from "react";
import Link from "next/link";

const ShopDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <section className="shop-details">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-image">
                                <img src="/images/shop/product-1.jpg" alt="Product" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-info">
                                <h2>Express Air Freight Service</h2>
                                <div className="price">$150.00</div>
                                <div className="rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star-half-alt"></span>
                                    <span className="reviews">(24 Reviews)</span>
                                </div>
                                <div className="text">
                                    <p>Our premium express air freight service ensures your cargo reaches its destination quickly and safely. Perfect for time-sensitive deliveries and valuable goods.</p>
                                </div>
                                <div className="quantity-box">
                                    <div className="item-quantity">
                                        <button onClick={decrementQuantity}>-</button>
                                        <input type="text" value={quantity} readOnly />
                                        <button onClick={incrementQuantity}>+</button>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link href="/shop-cart" className="theme-btn btn-style-one">
                                        <span>Add to Cart</span>
                                    </Link>
                                </div>
                                <div className="product-meta">
                                    <span className="sku">SKU: AF001</span>
                                    <span className="category">Category: Air Freight</span>
                                    <span className="tags">Tags: Express, Premium</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-description">
                        <h3>Product Description</h3>
                        <div className="text">
                            <p>Our Express Air Freight Service offers:</p>
                            <ul>
                                <li>Door-to-door delivery</li>
                                <li>Real-time tracking</li>
                                <li>Insurance coverage</li>
                                <li>24/7 customer support</li>
                                <li>Priority handling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopDetails;
