import AOS from 'aos'
import "aos/dist/aos.css"

import React, { useEffect } from 'react'
const AnaliticsArea = () => {


    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])
    return (

        <div class="analytics-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span class="title-ron">Our Features</span>
                    <h2>Actionable Analytics For Your Business</h2>
                </div>
                <div class="row animation">
                    <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-right">
                        <div class="analytics-card">
                            <div class="analytics d-flex position-relative">
                                <i class="flaticon-111-data-analysis-1"></i>
                                <div class="analytics-info">
                                    <h4>Data Analysis</h4>
                                    <p>Unleash your data's power. Our experts transform raw data into valuable insights, empowering data-driven decisions for business growth. Stay ahead of the competition with our comprehensive data analysis services. </p>
                                    <a class="analytics-btn" href="index.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-right">
                        <div class="analytics-card">
                            <div class="analytics d-flex position-relative">
                                <i class="flaticon-090-bot"></i>
                                <div class="analytics-info">
                                    <h4>AI Solutions</h4>
                                    <p>Unleash innovation with AI. Our solutions span NLP, computer vision, predictive modeling, and recommendation systems, revolutionizing operations and fueling your business's success. Explore the power of AI today.</p>
                                    <a class="analytics-btn" href="index.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-right">
                        <div class="analytics-card">
                            <div class="analytics d-flex position-relative">
                                <i class="flaticon-055-research"></i>
                                <div class="analytics-info">
                                    <h4>Research Planing and Design</h4>
                                    <p>
                                        Plan for success with our research services. Collaborate with our experts to define objectives, design efficient methodologies, and gain actionable insights that drive innovation, improve satisfaction, and optimize strategies.</p>
                                    <a class="analytics-btn" href="index.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-right">
                        <div class="analytics-card">
                            <div class="analytics d-flex position-relative">
                                <i class="flaticon-061-network-1"></i>
                                <div class="analytics-info">
                                    <h4>Software Developement</h4>
                                    <p>Elevate your business with custom software development. Our experts create tailored solutions to streamline processes, enhance efficiency, and drive growth. Experience excellence in software development today.</p>
                                    <a class="analytics-btn" href="index.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 mx-auto" data-aos="fade-right">
                        <div class="analytics-card">
                            <div class="analytics d-flex position-relative">
                                <i class="flaticon-061-network-1"></i>
                                <div class="analytics-info">
                                    <h4>Mobile Application Developement</h4>
                                    <p>Transform your ideas into reality with our mobile app development services. From Android to iOS, we create captivating and user-friendly applications that engage and delight your target audience. Experience mobile innovation today.</p>
                                    <a class="analytics-btn" href="index.html">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img class="analytics-shape-1 moveVertical" src="assets/images/shape/analytics-shape-1.png" alt="image" />
            <img class="analytics-shape-2" src="assets/images/shape/analytics-shape-2.png" alt="image" />
        </div>

    )
}

export default AnaliticsArea