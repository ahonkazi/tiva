import React from 'react'

const SingleTestimonialWrap = ({ profileImg, username, userPosition, userReview }) => {
    return (
        <div className="single-testimonials-warp" >
            <div className="quote-icon">
                <i className="flaticon-017-right-quote"></i>
            </div>
            <div className="single-content">
                <p>There are many variations of pass Lorem Ipsum available, but the majority hav suffered
                    alteration in some form, by inject humour or randomised words</p>
                <img className="client-image" src={profileImg} alt="image" />
                <h4>{username}</h4>
                <span>{userPosition}</span>
                <ul>
                    {
                        [...new Array(userReview <= 5 ? userReview : 5)].map(item =>
                            <li><i className='bx bxs-star'></i></li>

                        )
                    }
                </ul>
            </div>
        </div>)
}

export default SingleTestimonialWrap