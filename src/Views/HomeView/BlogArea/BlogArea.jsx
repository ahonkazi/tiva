import React from 'react'
import blogShape from "../../../assets/images/shape/clients-shape-1.png"
import blog3 from "../../../assets/images/blog/blog-3.jpg"
import blog2 from "../../../assets/images/blog/blog-2.jpg"
import blog1 from "../../../assets/images/blog/blog-1.jpg"
import BlogCard from '../../BlogCard'
const BlogArea = () => {
  return (

    <div className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="title-ron">News & Blog</span>
          <h2>Stay Update with Tiva From Latest & Popular News</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6" data-aos="fade-in" data-aos-duration="700">
            <BlogCard img={blog1} title={"Startup Marketing Solution for Business Owner"} />
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-in" data-aos-duration="1000">
            <BlogCard img={blog2} title={"Web Developement Best Work in Future World"} />
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-in" data-aos-duration="1300">
            <BlogCard img={blog3} title={"Creative Solutions to Improve Your Business!"} />
          </div>
        </div>
      </div>
      <img className="blog-shape-1 moveVertical" src={blogShape} alt="image" />
    </div>

  )
}

export default BlogArea