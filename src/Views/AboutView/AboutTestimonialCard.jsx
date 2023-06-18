import React from 'react'

const AboutTestimonialCard = () => {
    return (
        <div className="testimonial-card">
            <div className="content d-flex position-relative align-items-center">
                <a href="#">
                    <img src="assets/images/user/user-1.jpg" className="flex-shrink-0 me-4" alt="image" />
                </a>
                <div className="name">
                    <h5 className="mt-0">Maria A Quintero</h5>
                    <span>Customer</span>
                </div>
            </div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour or randomised words which don't
                look even. Lorem Ipsum available, the majority have suffered alteration in some form
            </p>
            <ul>
                <li><i className='bx bxs-star'></i></li>
                <li><i className='bx bxs-star'></i></li>
                <li><i className='bx bxs-star'></i></li>
                <li><i className='bx bxs-star'></i></li>
                <li><i className='bx bxs-star'></i></li>
            </ul>
            <i className="flaticon-017-right-quote quote"></i>
        </div>
    )
}

export default AboutTestimonialCard