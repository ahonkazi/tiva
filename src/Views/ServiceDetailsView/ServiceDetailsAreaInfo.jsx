import React from 'react'
import BlogImg from "../../assets/images/blog/blog-10.jpg"
import detailsImg from "../../assets/images/about/about-image-5.png"
import processImg1 from "../../assets/images/blog/blog-2.jpg"
import processImg2 from "../../assets/images/blog/blog-1.jpg"
const ServiceDetailsAreaInfo = () => {
    return (
        <div className="service-details">
            <div data-aos="zoom-in" data-aos-duration="1500">
                <img className="blog-10" src={BlogImg} alt="image" />
            </div>
            <h4>Machine Learning</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut.</p>
            <div className="service-analyses">
                <h5>Data Analysis</h5>
                <p className="error">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                    doloremque laudan tiumt.</p>
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <ul>
                            <li>
                                <i className="flaticon-083-check-mark"></i>Praesent risus pretium nec arcu in
                                Mauris irot.
                            </li>
                            <li>
                                <i className="flaticon-083-check-mark"></i>Integer at nibh eu ipsum scelerisque
                            </li>
                            <li>
                                <i className="flaticon-083-check-mark"></i>Mauris pretium fringilla fermentum
                                pretium
                            </li>
                            <li>
                                <i className="flaticon-083-check-mark"></i>Duis semper justo quis vulputate
                            </li>
                            <li>
                                <i className="flaticon-083-check-mark"></i>Sed venenatis elementum nisl tellus
                                pretium dui
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5" data-aos="zoom-in" data-aos-duration="2000">
                        <img className="details-image" src={detailsImg} alt="image" />
                    </div>
                </div>
                <h5>Our Work Process</h5>
                <p className="quia">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ration.</p>
                <div className="process">
                    <div className="row" data-aos="fade-in" data-aos-duration="1000">
                        <div className="col-lg-6">
                            <img className="process-1" src={processImg1} alt="image" />
                        </div>
                        <div className="col-lg-6">
                            <img className="process-1" src={processImg2} alt="image" />
                        </div>
                    </div>
                    <h5>Why Choose Our Services ?</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ration.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailsAreaInfo