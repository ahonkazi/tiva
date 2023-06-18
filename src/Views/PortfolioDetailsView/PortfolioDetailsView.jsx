import AOS from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import PortfolioDetailsContent from './PortfolioDetailsContent'
import ProjectDetails from './ProjectDetails'
import portfolioShape from "../../assets/images/shape/portfolio-shape-2.png"
import { Link } from 'react-router-dom'
const PortfolioDetailsView = () => {
    useEffect(() => {
        AOS.init({ once: true })
    }, [])
    return (
        <div className="portfolio-details pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <PortfolioDetailsContent />
                    </div>
                    <div className="col-lg-4">
                        <ProjectDetails />
                        <div className="need-portfolio">
                            <h2>Need A Brand New Project?</h2>
                            <Link className="common-btn" to="/contact">Contact Now</Link>
                            <img className="portfolio-shape-2" src={portfolioShape} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PortfolioDetailsView