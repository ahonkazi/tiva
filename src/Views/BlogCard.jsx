import React from 'react'

const BlogCard = ({ img ,title}) => {
    return (
        <div className="blog-card">
            <a className="d-block" href="blog-details.html">
                <img className="blog-image rounded-top" src={img} alt="image" />
            </a>
            <div className="blog-card-content">
                <ul>
                    <li>
                        <i className='bx bx-wifi-0'></i>
                        Business
                    </li>
                    <li>June 08, 2022</li>
                </ul>
                <h4>
                    <a href="/blog-details">{title}</a>
                </h4>
                <a className="blog-btn" href="/blog-details">Learn More</a>
            </div>
        </div>
    )
}

export default BlogCard