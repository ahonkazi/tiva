import React from 'react'
import user1img from "../../assets/images/user/user-1.jpg"
import user2img from "../../assets/images/user/user-2.jpg"
const BlogDetailsComment = () => {
    return (
        <div className="comments">
            <h4>2 Comments</h4>
            <ul>
                <li>
                    <img src={user1img} alt="image" />
                    <h5>Dominik Donovan</h5>
                    <div className="date">16 June, 2022, 7:30pm</div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusaot m rem
                        aperiam, eaque ipsa quae ab illo inventore veri.</p>
                    <a href="#">Reply</a>
                </li>
                <li>
                    <img src={user2img} alt="image" />
                    <h5>Maria A Quintero</h5>
                    <div className="date">16 June, 2022, 7:30pm</div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusaot m rem
                        aperiam, eaque ipsa quae ab illo inventore veri.</p>
                    <a href="#">Reply</a>
                </li>
            </ul>
        </div>
    )
}

export default BlogDetailsComment