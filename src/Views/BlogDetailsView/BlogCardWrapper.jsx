import React from 'react'
import BlogDetailsComment from './BlogDetailsComment'
import LeaveComment from './LeaveComment'
import BlogDetailsCard from './BlogDetailsCard'
import ShareTags from './ShareTags'

// images
import QuoteImg from "../../assets/images/svg/quote-2.svg"

import BlogImg1 from "../../assets/images/blog/blog-7.jpg"
import BlogImg2 from "../../assets/images/blog/blog-8.jpg"
const BlogCardWrapper = () => {
    return (
        <div className="blog-details">
            <BlogDetailsCard />
            <div className="robert">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                    nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                <span>_Robert Brown</span>
                <img className="quote-2" src={QuoteImg} alt="image" />
            </div>
            <div className="technology">
                <h4>How Ai Technology Work?</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.
                </p>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
                        <img className="blog-7" src={BlogImg1} alt="image" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" data-cues="zoomIn" data-duration="2000">
                        <img className="blog-7" src={BlogImg2} alt="image" />
                    </div>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut.</p>
            </div>
            <ShareTags />
            <BlogDetailsComment />
            <LeaveComment />
        </div>
    )
}

export default BlogCardWrapper