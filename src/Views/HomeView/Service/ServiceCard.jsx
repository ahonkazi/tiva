import React from 'react'

const ServiceCard = ({ img, title, link, text }) => {
    return (
        <div class="provide-card">
            <div class="provide-image">
                <img class="provide-1" src={img} alt="image" />
            </div>
            <div class="provide-card-content">
                <h4><a href="service-details.html">{title}</a></h4>
                <p>{text}</p>
                <a class="read-more" href={link}>Learn More</a>
            </div>
        </div>)
}

export default ServiceCard