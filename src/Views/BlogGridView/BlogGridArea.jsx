import React from 'react'
import BlogSearchForm from '../BlogSearchForm'
import BlogCategory from './BlogCategory'
import BlogTags from './BlogTags'
import BlogGridCard from './BlogGridCard'
// blog img
import blogImg1 from "../../assets/images/blog/blog-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-5.jpg"
import blogImg4 from "../../assets/images/blog/blog-4.jpg"
import blogImg5 from "../../assets/images/blog/blog-3.jpg"
import blogImg6 from "../../assets/images/blog/blog-9.jpg"
import BlogPagination from './BlogPagination'
const BlogGridArea = () => {
    const BlogCards = [
        {
            imgUrl: blogImg1,
            blogTitle: "Startup Marketing Solution for Business Owner",
            blogType: "Business",
            blogDate: "June 08, 2022"
        },
        {
            imgUrl: blogImg2,
            blogTitle: "Web Developement Best Work in Future World",
            blogType: "Business",
            blogDate: "June 08, 2022"
        },
        {
            imgUrl: blogImg3,
            blogTitle: "Creative Solutions to Improve Your Business!",
            blogType: "Business",
            blogDate: "June 08, 2022"
        },
        {
            imgUrl: blogImg4,
            blogTitle: "The Current State Of Artificial Intelligence",
            blogType: "Business",
            blogDate: "June 08, 2022"
        },
        {
            imgUrl: blogImg5,
            blogTitle: "Creative Solutions to Improve Your Business!",
            blogType: "Business",
            blogDate: "June 08, 2022"
        },
        {
            imgUrl: blogImg6,
            blogTitle: "20 Things You Should Know About Business",
            blogType: "Business",
            blogDate: "June 08, 2022"
        }
    ]
    return (

        <div className="blog-grid-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row" data-cues="fadeIn">
                            {
                                BlogCards.map((item) =>
                                    <div className="col-lg-6 col-md-6">
                                        <BlogGridCard blogImg={item.imgUrl} blogType={item.blogType} blogDate={item.blogDate} blogTitle={item.blogTitle} />
                                    </div>
                                )
                            }
                        </div>
                        <BlogPagination />
                    </div>
                    <div className="col-lg-4">
                        <BlogSearchForm />
                        <BlogCategory />
                        <BlogTags />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogGridArea