import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const Pricingplan = () => {
    return (

        <div className="plan-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="title-ron">Our Pricing Plan</span>
                    <h2>Basic or Advanced? We've Got You Covered</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom">
                        <div className="pricing-card pricing-plan-card">
                            <div className="pricing-card-heading">
                                <h4>Basic Package</h4>
                                <p>
                                    $22
                                    <span>Monthly</span>
                                </p>
                            </div>
                            <ul>
                                <li>
                                    Unlimited Site licenses
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    01 Database
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    10 Free Optimization
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    Html5 + Css3
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    24/7 Customer Support
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                            </ul>
                            <a className="read-more" href="#">Choose plan</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="30">
                        <div className="pricing-card pricing-plan-card">
                            <div className="pricing-card-heading">
                                <h4>Basic Package</h4>
                                <p>
                                    $199
                                    <span>Monthly</span>
                                </p>
                            </div>
                            <ul>
                                <li>
                                    Unlimited Site licenses
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    20 Database
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    100 Free Optimization
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    Html5 + Css3
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    24/7 Customer Support
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                            </ul>
                            <a className="read-more" href="#">Choose plan</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
                        <div className="pricing-card pricing-plan-card">
                            <div className="pricing-card-heading">
                                <h4>Advanced Package</h4>
                                <p>
                                    $99
                                    <span>Monthly</span>
                                </p>
                            </div>
                            <ul>
                                <li>
                                    Unlimited Site licenses
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    05 Database
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    20 Free Optimization
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    Html5 + Css3
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                                <li>
                                    24/7 Customer Support
                                    <i className="flaticon-083-check-mark"></i>
                                </li>
                            </ul>
                            <a className="read-more" href="#">Choose plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pricingplan