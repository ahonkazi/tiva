import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import aboutImg from "../../../assets/images/about/about-image-5.png"
const WhoWeAre = () => {
    return (




        <div className="expert-area ptb-100 bg-color-f6fcff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="expert-content">
                            <div className="section-heading">
                                <span className="title-ron">Who We Are</span>
                                <h2>We are Expert in Data Science & Analytics</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't look
                                even.</p>
                            <div className="skills">
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h3 className="skill-title">Data Consulting</h3>
                                        <div className="skill-percentage">
                                            <div className="count-box counted"><span className="count-text" data-speed="2000"
                                                data-stop="82">62</span>%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="95" style={{ width: "62%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h3 className="skill-title">Big Data Analysis</h3>
                                        <div className="skill-percentage">
                                            <div className="count-box counted"><span className="count-text " data-speed="2000"
                                                data-stop="90">82</span>%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="90" style={{ width: "82%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="common-btn" href="about.html">Discover More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="expert-image" data-aos="fade-up" data-aos-duration="900">
                            <img className="about-image-5" src={aboutImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default WhoWeAre