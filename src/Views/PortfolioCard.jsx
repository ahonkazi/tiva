import React from 'react'

const PortfolioCard = ({img,title,link}) => {
    return (
        <div className="portfolio-card" data-aos="fade-up" data-aos-duration="900">
            <div className="view-gallery">
                <a data-fancybox="gallery" href={img}>
                    <img className="portfolio-1" src={img} alt="image" />
                </a>
                <a data-fancybox="gallery" href={img}>
                    <div className="popup-view">
                        <i className="bx bx-plus"></i>
                    </div>
                </a>
                <div className="single-view">
                    <span>{title}</span>
                    <h4>
                        <a href="/portfoliodetails">{link}</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard