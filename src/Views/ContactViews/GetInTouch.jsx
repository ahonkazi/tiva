import React from 'react'
import subTitleImg from "../../assets/images/shape/hero-shape-2.png"
import contactImg from "../../assets/images/about/about-image-3.png"
const GetInTouch = () => {
    return (




        <div className="get-touch-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form id="contactForm" className="contact-form">
                            <div className="section-heading">
                                <span className="about-sub-title">
                                    <img className="sub-title-image" src={subTitleImg} alt="image" />
                                    CONTACT US
                                </span>
                                <h2>Get In Touch</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-sm-6 col-md-12 col-xl-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" required="" data-error="Please enter your name" placeholder="Your Full Name" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" required="" data-error="Please enter your email" placeholder="Email Address" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-md-6 col-xl-6">
                                    <div className="form-group">
                                        <input type="text" required="" data-error="Please enter your number" className="form-control" placeholder="Phone No" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control textarea" cols="30" rows="8" required="" data-error="Write your message" placeholder="Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button className="common-btn disabled" type="submit" style={{ pointerEvents: "all", cursor: "pointer" }}>Submit Now</button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="get-image" data-aos="fade-in" data-aos-duration="900">
                            <img className="contact-image" src={contactImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch