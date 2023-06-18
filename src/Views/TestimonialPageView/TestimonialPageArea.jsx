import React from 'react'
import SingleTestimonialWrap from './SingleTestimonialWrap'
import User1 from "../../assets/images/user/user-1.jpg"
import User2 from "../../assets/images/user/user-2.jpg"
import User3 from "../../assets/images/user/user-3.jpg"
import User4 from "../../assets/images/user/user-4.jpg"
import User5 from "../../assets/images/user/user-5.jpg"
import User6 from "../../assets/images/user/user-6.jpg"
const TestimonialPageArea = () => {
    const testimonialData = [

        { username: "Maria A Quintero", userImg: User1, userPosition: "Customer", userReview: 5 },
        { username: "Avery B Scarlett", userImg: User2, userPosition: "Customer", userReview: 5 },
        { username: "Logan Jackson", userImg: User3, userPosition: "Customer", userReview: 5 },
        { username: "Penelope Chloe", userImg: User4, userPosition: "Customer", userReview: 5 },
        { username: "Daniel S Jacob", userImg: User5, userPosition: "Customer", userReview: 5 },
        { username: "Layla Q Mila", userImg: User6, userPosition: "Customer", userReview: 5 },
    ]
    return (
        <div className="testimonials-page pt-100 pb-70">
            <div className="container">
                <div className="row" >


                    {testimonialData.map(item =>
                        <div className="col-lg-4" data-aos="fade-in" data-aos-delay="1000">
                            <SingleTestimonialWrap profileImg={item.userImg} username={item.username} userPosition={item.userPosition} userReview={item.userReview}/>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

export default TestimonialPageArea