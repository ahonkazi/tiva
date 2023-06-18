import React from 'react'
import ContactShape from "../../assets/images/shape/portfolio-shape-2.png"
import ContactShape2 from "../../assets/images/shape/contact-shape-1.png"
const ContactMail = () => {
    return (



        <div className="contact-mail">
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-in" data-aos-duration="900">
                    <div className="col-lg-4 col-md-6">
                        <div className="mail">
                            <i className="flaticon-008-location"></i>
                            <h4>Our Address</h4>
                            <span>121 King Street, Melbourne Victoria 3000, Australia.</span>
                            <img className="contact-shape" src={ContactShape} alt="image" />
                            <img className="contact-shape-1" src={ContactShape2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mail">
                            <i className="flaticon-010-at"></i>
                            <h4>Our Email</h4>
                            <ul>
                                <li><a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#abc3cec7c7c4ebdfc2ddca85c8c4c6"><span className="__cf_email__" data-cfemail="f49c9198989bb4809d8295da979b99">[email&#160;protected]</span></a></li>
                                <li><a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#224b4c444d62564b54430c414d4f"><span className="__cf_email__" data-cfemail="31585f575e71455847501f525e5c">[email&#160;protected]</span></a></li>
                            </ul>
                            <img className="contact-shape" src={ContactShape} alt="image" />
                            <img className="contact-shape-1" src={ContactShape2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mail">
                            <i className="flaticon-009-phone-call"></i>
                            <h4>Our Phone</h4>
                            <ul>
                                <li><a href="tel:990001112225500">(+99-000-111-222-55-00)</a></li>
                                <li><a href="tel:000123456789">(000) 123456789</a></li>
                            </ul>
                            <img className="contact-shape" src={ContactShape} alt="image" />
                            <img className="contact-shape-1" src={ContactShape2} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMail