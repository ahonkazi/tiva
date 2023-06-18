import React from 'react'
import FaqCategory from './FaqCategory'
import FaqDownload from './FaqDownload'
import FaqDetails from './FaqDetails'

const FaqDetailsPage = () => {
    return (
        <div className="faq-details-page ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <FaqDetails />
                    </div>
                    <div className="col-lg-4">
                        <FaqCategory />
                        <FaqDownload />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FaqDetailsPage