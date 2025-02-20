import Link from "next/link";

const ShopSidebar = () => {
    return (
        <>
            <section className="shop-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
                                {/* Categories Widget */}
                                <div className="sidebar-widget categories">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><Link href="#">Air Freight</Link></li>
                                        <li><Link href="#">Express Delivery</Link></li>
                                        <li><Link href="#">Cargo Insurance</Link></li>
                                        <li><Link href="#">Tracking Services</Link></li>
                                        <li><Link href="#">Packaging Solutions</Link></li>
                                    </ul>
                                </div>

                                {/* Price Filter Widget */}
                                <div className="sidebar-widget price-filter">
                                    <h3>Filter by Price</h3>
                                    <div className="price-range">
                                        <div className="price-input">
                                            <input type="text" defaultValue="$0" readOnly />
                                            <input type="text" defaultValue="$500" readOnly />
                                        </div>
                                    </div>
                                </div>

                                {/* Popular Products Widget */}
                                <div className="sidebar-widget popular-products">
                                    <h3>Popular Services</h3>
                                    <div className="widget-content">
                                        <div className="product">
                                            <div className="image">
                                                <img src="/images/shop/thumb-1.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/shop-product-details">Express Air Freight</Link></h4>
                                                <div className="price">$150.00</div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="image">
                                                <img src="/images/shop/thumb-2.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/shop-product-details">Priority Shipping</Link></h4>
                                                <div className="price">$200.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="products-area">
                                <div className="row">
                                    {/* Product Item 1 */}
                                    <div className="col-md-4 shop-item">
                                        <div className="inner-box">
                                            <div className="image">
                                                <Link href="/shop-product-details">
                                                    <img src="/images/shop/1.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="lower-content">
                                                <h4><Link href="/shop-product-details">Express Air Freight</Link></h4>
                                                <div className="price">$150.00</div>
                                                <Link href="/shop-cart" className="theme-btn btn-style-one">
                                                    <span>Add to Cart</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Item 2 */}
                                    <div className="col-md-4 shop-item">
                                        <div className="inner-box">
                                            <div className="image">
                                                <Link href="/shop-product-details">
                                                    <img src="/images/shop/2.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="lower-content">
                                                <h4><Link href="/shop-product-details">Priority Shipping</Link></h4>
                                                <div className="price">$200.00</div>
                                                <Link href="/shop-cart" className="theme-btn btn-style-one">
                                                    <span>Add to Cart</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Item 3 */}
                                    <div className="col-md-4 shop-item">
                                        <div className="inner-box">
                                            <div className="image">
                                                <Link href="/shop-product-details">
                                                    <img src="/images/shop/3.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="lower-content">
                                                <h4><Link href="/shop-product-details">Cargo Insurance</Link></h4>
                                                <div className="price">$100.00</div>
                                                <Link href="/shop-cart" className="theme-btn btn-style-one">
                                                    <span>Add to Cart</span>
                                                </Link>
                                            </div>
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

export default ShopSidebar;
