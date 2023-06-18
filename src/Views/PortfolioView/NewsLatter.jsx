import React from 'react'
import newslatterImg from "../../assets/images/newsletter.jpg"
import videoShape1 from "../../assets/images/shape/video-shape-1.png"
import subscribeShape1 from "../../assets/images/shape/subscribe-shape-1.png"
const NewsLatter = () => {
    return (

        <div className="newsletter-area" data-cues="fadeIn">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-5 col-md-5">
                        <div className="newsletter-image">
                            <img className="latest-1" src={newslatterImg} alt="image" />
                            <div className="icon">
                                <i className="flaticon-029-email-4 email rotate"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="newsletter-content">
                            <div className="section-heading">
                                <span className="about-sub-title">
                                    <img className="sub-title-image" src={videoShape1} alt="image" />
                                    SUBSCRIBE OUR NEWSLETTER!
                                </span>
                                <h2>Get Latest Update And News First</h2>
                            </div>
                            <form className="newsletter-form">
                                <div className="form-group newsletter-form">
                                    <input type="email" name="email" className="form-control"
                                        placeholder="Enter Your Email Address" required="" autocomplete="off" />
                                    <button type="submit" className="newsletter-btn disabled"
                                        style={{ pointerEvents: "all", cursor: "pointer" }}>Subscribe Newsletter</button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </div>
                            </form>
                            <img className="subscribe-shape-1" src={subscribeShape1} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsLatter