import AOS from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'

import blogImg from "../../assets/images/blog/blog-9.jpg"
import portfolioImg1 from "../../assets/images/about/about-image-1.png"
import portfolioImg2 from "../../assets/images/about/about-image-2.png"
const PortfolioDetailsContent = () => {
    useEffect(() => {
        AOS.init({once: true })
    }, [])
    return (
        <div className="portfolio-details-content">
            <div data-aos="fade-in" data-aos-duration="1000">
                <img className="blog-9" src={blogImg} alt="image" />
            </div>
            <h4>About The Project</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut.</p>
            <div className="row align-items-center" data-aos="fade-in">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img className="portfolio-image" src={portfolioImg1} alt="image" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img className="portfolio-image" src={portfolioImg2} alt="image" />
                </div>
            </div>
            <div className="project-tips">
                <h5>Project Tips</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.
                </p>
                <ul>
                    <li>
                        <i className='bx bx-check'></i>
                        Fusce justo risus placerat in risus eget tincidunt consequat elit
                    </li>
                    <li>
                        <i className='bx bx-check'></i>
                        Nunc fermentum sem sit amet dolor laoreet placerat.
                    </li>
                    <li>
                        <i className='bx bx-check'></i>
                        Integer quis lorem est uspendisse eu augue porta ullamcorper dictum.
                    </li>
                </ul>
            </div>
            <div className="overview">
                <h5>Overview & Challenge</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.
                </p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut.</p>
            </div>
        </div>
    )
}

export default PortfolioDetailsContent