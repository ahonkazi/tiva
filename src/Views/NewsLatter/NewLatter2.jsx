import React from 'react'
import NewsLatterImg from './NewsLatterImg'
import subTitleImg from "../../assets/images/shape/video-shape-1.png"
import subsShape1 from "../../assets/images/shape/subscribe-shape-1.png"
const NewLatter2 = () => {
    return (

        <div className="newsletter-area" data-aos="fade-in">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-5 col-md-5">
                        <NewsLatterImg />
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="newsletter-content">
                            <div className="section-heading">
                                <span className="about-sub-title">
                                    <img className="sub-title-image" src={subTitleImg} alt="image" />
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
                            <img className="subscribe-shape-1" src={subsShape1} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewLatter2