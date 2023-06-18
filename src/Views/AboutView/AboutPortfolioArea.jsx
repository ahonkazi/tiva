import React from 'react'
import subTitleShape from "../../assets/images/shape/hero-shape-2.png"
import portfolioImg1 from "../../assets/images/portfolio/portfolio-1.jpg"
import portfolioImg2 from "../../assets/images/portfolio/portfolio-2.jpg"
import portfolioImg3 from "../../assets/images/portfolio/portfolio-3.jpg"
import PortfolioCard from '../PortfolioCard'
import { Link } from 'react-router-dom'
const AboutPortfolioArea = () => {
    return (


        <div className="portfolio-area pt-100 pb-70 bg-color-f6fcff">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img className="sub-title-shape" src={subTitleShape} alt="image" />
                        Our Portfolio
                    </span>
                    <h2>We Ensure Data and Analytics Services Run Well</h2>
                </div>
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="900">
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolioImg1} title={"Data Research"} link={"Product Analysis"} />

                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolioImg2} title={"Data Security"} link={"Data Visualization"} />

                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolioImg3} title={"Data Analysis"} link={"Artificial Intelligence"} />

                    </div>
                </div>
            </div>
            <p>Get Ready to Start It’s Fast & Easy. <Link to="/portfolio-details">View More</Link></p>
        </div>

    )
}

export default AboutPortfolioArea