import React from 'react'
import { Link } from 'react-router-dom'

const BlogGridCard = ({ blogImg, blogType, blogDate, blogTitle }) => {
    return (
        <div className="blog-card">
            <Link to="/blog-details">
                <img className="blog-image rounded-top" src={blogImg} alt="image" />
            </Link>
            <div className="blog-card-content">
                <ul>
                    <li>
                        <i className='bx bx-wifi-0'></i>
                        {blogType}
                    </li>
                    <li>{blogDate}</li>
                </ul>
                <h4>
                    <Link to="/blog-details">{blogTitle}</Link>
                </h4>
                <Link className="blog-btn" to="/blog-details">Learn More</Link>
            </div>
        </div>
    )
}

export default BlogGridCard