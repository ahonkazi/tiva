import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard2 = ({img,title}) => {
    return (
        <div className="services-card">
            <div className="services-card-image">
                <img className="service-1" src={img} alt="image" />
            </div>
            <h4>
                <Link to="/service-details">{title}</Link>
            </h4>
            <p>Lorem ipsum amet,conse adipiscing elit.Ut elit tellus,luctu ectetur ullam corper.</p>
            <Link className="service-btn" to="/service-details">Learn More</Link>
        </div>
    )
}

export default ServiceCard2