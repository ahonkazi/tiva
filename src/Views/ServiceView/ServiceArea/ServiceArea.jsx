import React from 'react'
import ServicePagination from './ServicePagination'
import TitleShape from "../../../assets/images/shape/hero-shape-2.png"
import Service1 from "../../../assets/images/svg/service-1.svg"
import Service2 from "../../../assets/images/svg/service-2.svg"
import Service3 from "../../../assets/images/svg/service-3.svg"
import Service4 from "../../../assets/images/svg/service-4.svg"
import Service5 from "../../../assets/images/svg/service-9.svg"
import Service6 from "../../../assets/images/svg/service-10.svg"
import Service7 from "../../../assets/images/svg/service-11.svg"
import Service8 from "../../../assets/images/svg/service-12.svg"
import ServiceCard2 from './ServiceCard2'
const ServiceArea = () => {
    return (



        <div className="services-area services-area-two pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img className="sub-title-shape" src={TitleShape} alt="image" />
                        OUR SERVICES
                    </span>
                    <h2>We Provide Big Data Analytics Technical Data Issues</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="900">
                        <ServiceCard2 img={Service1} title={"Big Data Consulting"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <ServiceCard2 img={Service2} title={"Data Visualization"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                        <ServiceCard2 img={Service3} title={"Machine Learning"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1300">
                        <ServiceCard2 img={Service4} title={"Artificial Intelligence"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1300">
                        <ServiceCard2 img={Service5} title={"Data Management"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <ServiceCard2 img={Service6} title={"Business Intelligence"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                        <ServiceCard2 img={Service7} title={"Managed Analytics"} />
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1300">
                        <ServiceCard2 img={Service8} title={"Cloud Automation"} />
                    </div>


                </div>
            </div>
            <ServicePagination />
        </div>

    )
}

export default ServiceArea