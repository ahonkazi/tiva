import React from 'react'
import ServiceDetailsAreaInfo from './ServiceDetailsAreaInfo'
import ServiceDetailsCategory from './ServiceDetailsCategory'
import BlogSearchForm from '../BlogSearchForm'
const ServiceDetailsArea = () => {
    return (

        <div className="service-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ServiceDetailsAreaInfo />
                    </div>
                    <div className="col-lg-4">
                        <BlogSearchForm />
                        <ServiceDetailsCategory />
                        <div className="download">
                            <h4>Download</h4>
                            <button>
                                <img className="download-icon" src="assets/images/svg/download.svg" alt="image" />
                                Download Brochure
                            </button>
                            <button>
                                <img className="download-icon" src="assets/images/svg/download.svg" alt="image" />
                                Download Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ServiceDetailsArea