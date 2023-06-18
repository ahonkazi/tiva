import React from 'react'

const BlogSearchForm = () => {
    return (
        <form className="blog-search-form">
            <div className="form-group">
                <input type="search" className="form-control" placeholder="Search" />
                <button type="submit" className="search-btn">
                    <i className="flaticon-119-search-2"></i>
                </button>
            </div>
        </form>
    )
}

export default BlogSearchForm