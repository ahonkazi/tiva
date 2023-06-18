import React from 'react'
import quoteIcon from "../../../assets/images/svg/quote-1.svg"
const TestimonialCard = ({userImg, username, userRole}) => {
    return (
        <div class="single-testimonials-card">
            <img class="quote-1" src={quoteIcon} alt="image" />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour or randomised words which don't look even. Lorem
                Ipsum available, the majority have suffered alteration in some form</p>
            <div class="content d-flex position-relative align-items-center">
                <img src={userImg} class="flex-shrink-0 me-4" alt="image" />
                <div class="name">
                    <h5 class="mt-0">{username}</h5>
                    <span>{userRole}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard