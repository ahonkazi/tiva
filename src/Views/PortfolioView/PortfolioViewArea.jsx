import React from 'react'
import PortfolioCard from '../PortfolioCard'
import portfolio1 from "../../assets/images/portfolio/portfolio-1.jpg"
import portfolio2 from "../../assets/images/portfolio/portfolio-2.jpg"
import portfolio3 from "../../assets/images/portfolio/portfolio-3.jpg"
import portfolio4 from "../../assets/images/portfolio/portfolio-9.jpg"
import portfolio5 from "../../assets/images/portfolio/portfolio-10.jpg"
import portfolio6 from "../../assets/images/portfolio/portfolio-11.jpg"
import heroShape from "../../assets/images/shape/hero-shape-2.png"
import PortfolioPagination from './PortfolioPagination'
const PortfolioViewArea = () => {
    return (

        <div className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img className="sub-title-shape" src={heroShape} alt="image" />
                        Our Portfolio
                    </span>
                    <h2>We Ensure Data and Analytics Services Run Well</h2>
                </div>
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="900">
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolio1} title="Data Research" link="Product Analysis" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolio2} title="Data Security" link="Product Analysis" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolio3} title="Data Analysis" link="Al Solutions" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolio4} title="Data Research" link="Data Visualization" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolio5} title="Data Research" link="Machine Learning" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <PortfolioCard img={portfolio6} title="Data Research" link="Artificial Intelligence" />
                    </div>



                </div>
            </div>
            <PortfolioPagination />
            
        </div>

    )
}

export default PortfolioViewArea