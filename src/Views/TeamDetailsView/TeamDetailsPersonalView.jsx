import React from 'react'
import teamImg from "../../assets/images/team/team-9.jpg"
const TeamDetailsPersonalView = () => {
    return (
        <div className="personal-details">
            <div data-aos="zoom-in" data-aos-duration="1000">
                <img className="team-9" src={teamImg} alt="image" />
            </div>
            <h4>Personal Details</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo otam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architect nt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut consequuntur magni dolores eos qui
                ration.</p>
            <form className="leave-contact">
                <h4>Contact Me</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                        <input type="text" className="form-control" placeholder="Website" />
                    </div>
                    <div className="col-lg-12">
                        <textarea className="form-control textarea" placeholder="Type Your Comment"></textarea>
                    </div>
                </div>
                <button className="common-btn">Submit Message</button>
            </form>
        </div>
    )
}

export default TeamDetailsPersonalView