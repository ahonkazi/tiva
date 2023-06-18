import React from 'react'
import MainSectionTitle from '../MainSectionTitle'
import BlogCard from '../BlogCard'
import blog1 from "../../assets/images/blog/blog-1.jpg"
import blog2 from "../../assets/images/blog/blog-2.jpg"
import blog3 from "../../assets/images/blog/blog-3.jpg"
import { Link } from 'react-router-dom'
const AboutBlogArea = () => {
    return (
        <div className="blog-area pt-100 pb-70 bg-color-f6fcff">
            <div className="container">

                <MainSectionTitle subTitle={"News & Blog"} mainTitle={"Stay Update with Tiva From Latest & Popular News"} />
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6" data-aos="fade-in">
                        <BlogCard img={blog1} title={"Startup Marketing Solution for Business Owner"} />
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-in">
                        <BlogCard img={blog2} title={"Web Developement Best Work in Future World!"} />
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-in">
                        <BlogCard img={blog3} title={"Creative Solutions to Improve Your Business!"} />
                    </div>

                </div>
            </div>
            <p>Get Ready to Start It’s Fast & Easy. <Link to="/blog-details">View More</Link></p>
        </div>
    )
}

export default AboutBlogArea