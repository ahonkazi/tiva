import React from 'react'
import aboutImg1 from "../../assets/images/about/about-image-1.png"
import subTitleImg from "../../assets/images/shape/hero-shape-2.png"
const AboutArea = () => {
    return (
        <div className="about-area about-page ptb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="about-image" data-aos="fade-up" data-aos-delay="300">
                            <img className="about-image-1" src={aboutImg1} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div className="section-heading">
                                <span className="about-sub-title">
                                    <img className="sub-title-image" src={subTitleImg} alt="image" />
                                    ABOUT US
                                </span>
                                <h2>Focusing on Analysis, Techniques & Experience</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                            <ul>
                                <li>
                                    <i className="flaticon-083-check-mark"></i>
                                    Various analysis options.
                                </li>
                                <li>
                                    <i className="flaticon-083-check-mark"></i>
                                    Page Load (time, size, number of requests).
                                </li>
                                <li>
                                    <i className="flaticon-083-check-mark"></i>
                                    Big data analysis.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea