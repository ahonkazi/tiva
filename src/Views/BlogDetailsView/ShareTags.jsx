import React from 'react'

const ShareTags = () => {
    return (
        <div className="share-tags">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-7">
                    <div className="first-tags">
                        <ul>
                            <li>
                                <p>Tags:</p>
                            </li>
                            <li>
                                <a className="d-inline-block" href="#">Data Analytics</a>
                            </li>
                            <li>
                                <a className="d-inline-block" href="#">AI Development</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5">
                    <div className="second-side">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="flaticon-067-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i className="flaticon-066-twitter-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="flaticon-068-instagram-3"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="flaticon-069-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareTags