import React from 'react'
import FaqAccordion from './FaqAccordion'

const FaqDetails = () => {
    return (
        <div className="faq-details">
            <div className="faq-content">
                <FaqAccordion />
            </div>
            <form className="faq-form">
                <h5>Ask Question or Get Quote</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6">
                        <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-6">
                        <input type="number" className="form-control" placeholder="Your Phone" />
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control" placeholder="Your Website" />
                    </div>
                    <div className="col-lg-12">
                        <textarea className="form-control textarea" placeholder="Write Message"></textarea>
                    </div>
                </div>
                <button className="common-btn">Get A Quote</button>
            </form>
        </div>)
}

export default FaqDetails