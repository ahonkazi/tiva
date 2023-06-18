import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ cardImg, personName, personProfile }) => {
    return (
        <div className="team-card">
            <div className="tram-image">
                <img className="team-1" src={cardImg} alt="image" />
                <div className="profile-btn">
                    <div className="share-in">
                        <i className="flaticon-116-plus"></i>
                        <a className="facebook" href="https://www.facebook.com/" target="_blank">
                            <i className="flaticon-067-facebook"></i>
                        </a>
                        <a className="instagram" href="https://www.instagram.com/" target="_blank">
                            <i className="flaticon-068-instagram-3"></i>
                        </a>
                        <a className="twitter" href="https://www.twitter.com/" target="_blank">
                            <i className="flaticon-066-twitter-2"></i>
                        </a>
                        <a className="linkedin" href="https://www.linkedin.com/" target="_blank">
                            <i className="flaticon-069-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="team-card-info">
                <h4>
                    <Link href="/team-details">{personName}</Link>
                </h4>
                <p>{personProfile}</p>
            </div>
        </div>
    )
}

export default TeamCard