import React from 'react'

const LeaveComment = () => {
    return (
        <form className="leave">
            <h4>Leave A Comment</h4>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-lg-12">
                    <input type="text" className="form-control" placeholder="Your Website" />
                </div>
                <div className="col-lg-12">
                    <textarea className="form-control textarea" placeholder="Type Your Comment"></textarea>
                </div>
            </div>
            <button className="common-btn">Post Comment</button>
        </form>)
}

export default LeaveComment