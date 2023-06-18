import React from 'react'
import blogCardImg from "../../assets/images/blog/blog-3.jpg"
const BlogDetailsCard = () => {
    return (
        <div className="blog-card">
            <img className="blog-image rounded" src={blogCardImg} alt="image" />
            <div className="blog-card-content">
                <h4>
                    Creative Solutions to Improve Your Business!
                </h4>
                <ul>
                    <li>
                        <i className='bx bx-wifi-0'></i>
                        Business
                    </li>
                    <li>June 08, 2022</li>
                </ul>
            </div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration.
            </p>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudan tiumt otam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut.
            </p>
        </div>)
}

export default BlogDetailsCard