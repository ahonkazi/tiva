import React from 'react'
import BlogSearchForm from '../BlogSearchForm'
import BlogDetailsCategory from './BlogDetailsCategory'
import BlogDetailsRecentPost from './BlogDetailsRecentPost'
import BlogDetailsTags from './BlogDetailsTags'
import BlogCardWrapper from './BlogCardWrapper'
const BlogDetailsArea = () => {
    return (
        <div className="blog-details-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <BlogCardWrapper />
                    </div>
                    <div className="col-lg-4">
                        <BlogSearchForm />
                        <BlogDetailsCategory />
                        <BlogDetailsRecentPost />
                        <BlogDetailsTags />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogDetailsArea