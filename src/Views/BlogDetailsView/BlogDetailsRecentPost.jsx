import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetailsRecentPost = () => {
    return (
        <div className="recent-post">
            <h4>Recent Posts</h4>
            <div className="single-recent-post d-flex align-items-center">
                <Link className="thumb" to="/blog-details">
                    <span className="full-image cover bg-1"></span>
                </Link>
                <div className="single-recent-info">
                    <h5 className="mt-0">
                        <a href="#">Startup Marketing Solution for Business Owner</a>
                    </h5>
                    <ul>
                        <li>
                            <p></p>
                        </li>
                        <li>Business</li>
                        <li>Nov 02, 2022</li>
                    </ul>
                </div>
            </div>
            <div className="single-recent-post d-flex align-items-center">
                <Link className="thumb" to="/blog-details">
                    <span className="full-image cover bg-2"></span>
                </Link>
                <div className="single-recent-info">
                    <h5 className="mt-0">
                        <a href="#">20 Things You Should Know About Business</a>
                    </h5>
                    <ul>
                        <li>
                            <p></p>
                        </li>
                        <li>Business</li>
                        <li>Nov 04, 2022</li>
                    </ul>
                </div>
            </div>
            <div className="single-recent-post d-flex align-items-center">
                <Link className="thumb" to="/blog-details">
                    <span className="full-image cover bg-3"></span>
                </Link>
                <div className="single-recent-info">
                    <h5 className="mt-0">
                        <a href="#">The Current State Of Artificial Intelligence</a>
                    </h5>
                    <ul>
                        <li>
                            <p></p>
                        </li>
                        <li>Business</li>
                        <li>Nov 06, 2022</li>
                    </ul>
                </div>
            </div>
            <div className="single-recent-post d-flex align-items-center">
                <Link className="thumb" to="/blog-details">
                    <span className="full-image cover bg-4"></span>
                </Link>
                <div className="single-recent-info">
                    <h5 className="mt-0">
                        <a href="#">Algorithm Tells Robots Where Nearby Humans</a>
                    </h5>
                    <ul>
                        <li>
                            <p></p>
                        </li>
                        <li>Business</li>
                        <li>Nov 08, 2022</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsRecentPost