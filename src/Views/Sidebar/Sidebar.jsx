import React, { useContext } from 'react'
import { GetContext } from '../../context/AppContext'

const Sidebar = () => {
    const context = useContext(GetContext)
    return (
        <div className="side-menu" style={{ background: "#fff" }}>
            <div className={`offcanvas-backdrop fade ${context.sidebarStatus ? 'show' : ''}`} style={context.sidebarStatus ? { pointerEvents: "all" } : { pointerEvents: "none" }}></div>

            <div className={`offcanvas offcanvas-end ${context.sidebarStatus ? 'show' : 'hiding'}`} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRight">
                <div className="offcanvas-header">
                    <a href="index.html">
                        <img src="assets/images/logo.png" className="white-logo" alt="image" />
                    </a>
                    <button onClick={() => context.setSidebarStatus(false)} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="modal-body">
                        <div className="sidebar-content">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                                labore et magna aliqua.</p>
                        </div>
                        <div className="sidebar-contact-info">
                            <h3>Contact Information</h3>
                            <ul className="info-list">
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:9901234567">+990-123-4567</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a
                                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ed99849b8cad8a808c8481c38e8280"><span
                                            className="__cf_email__"
                                            data-cfemail="8df9e4fbeccdeae0ece4e1a3eee2e0">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <i className='bx bx-map'></i>413 North Las Vegas, NV 89032
                                </li>
                            </ul>
                        </div>
                        <ul className="sidebar-social-list">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i className='bx bxl-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className='bx bxl-instagram-alt'></i>
                                </a>
                            </li>
                        </ul>
                        <div className="contact-form">
                            <h3>Ready to Get Started?</h3>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required=""
                                                data-error="Please enter your name" placeholder="Your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" required=""
                                                data-error="Please enter your email" placeholder="Your email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="number" className="form-control" required=""
                                                data-error="Please enter your phone number" placeholder="Your phone" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control textarea" cols="30" rows="6" required=""
                                                data-error="Please enter your message"
                                                placeholder="your message..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="common-btn"
                                            style={{ pointerEvents: "all", cursor: "pointer" }}>Send Message<span></span></button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar