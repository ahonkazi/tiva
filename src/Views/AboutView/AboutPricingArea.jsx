import React from 'react'
import subTitleImg from "../../assets/images/shape/hero-shape-2.png"
import logo1 from "../../assets/images/logo/logo-1.png"
import logo2 from "../../assets/images/logo/logo-2.png"
import logo3 from "../../assets/images/logo/logo-3.png"
import logo4 from "../../assets/images/logo/logo-4.png"
import pricingShape from "../../assets/images/shape/pricing-shape-1.png"

const AboutPricingArea = () => {
    return (

        <div className="pricing-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="pricing-content">
                            <div className="section-heading">
                                <span className="about-sub-title">
                                    <img className="sub-title-image" src={subTitleImg} alt="image" />
                                    OUR PRICING PLANS
                                </span>
                                <h2>Basic or Advanced? We've got you Covered</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't look
                                even.</p>
                            <div className="pricing-logo">
                                <h6>Accepted Payment Methods</h6>
                                <div className="logo">
                                    <div className="row" data-aos="fade-in" data-aos-duration="900">
                                        <div className="col-lg-3 col-md-3 col-3">
                                            <div className="log-image">
                                                <a href="#">
                                                    <img className="logo-1" src={logo1} alt="image" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-3">
                                            <div className="log-image">
                                                <a href="#">
                                                    <img className="logo-1" src={logo2} alt="image" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-3">
                                            <div className="log-image">
                                                <a href="#">
                                                    <img className="logo-1" src={logo3} alt="image" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-3">
                                            <div className="log-image">
                                                <a href="#">
                                                    <img className="logo-1" src={logo4} alt="image" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing">
                            <div className="row" data-aos="fade-up" data-aos-duration="900">
                                <div className="col-lg-6 col-md-6">
                                    <div className="pricing-card style-one">
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
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                1 Database
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                10 Free Optimization
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                Html5 + Css3
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                24/7 Customer Support
                                                <i className='bx bx-check'></i>
                                            </li>
                                        </ul>
                                        <a className="common-btn" href="#">Choose plan </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="pricing-card">
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
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                1 Database
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                10 Free Optimization
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                Html5 + Css3
                                                <i className='bx bx-check'></i>
                                            </li>
                                            <li>
                                                24/7 Customer Support
                                                <i className='bx bx-check'></i>
                                            </li>
                                        </ul>
                                        <a className="common-btn" href="#">Choose plan </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className="pricing-shape-1 moveHorizontal" src={pricingShape} alt="image" />
        </div>

    )
}

export default AboutPricingArea