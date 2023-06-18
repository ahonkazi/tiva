import React from 'react'
import aboutImg from "../../assets/images/about/about-image-3.png"
import TeamProfessionalSkills from './TeamProfessionalSkills'
const TeamRobert = () => {
    return (
        <div className="team-robert">
            <h4>Robert Brown</h4>
            <span>Founder & CEO</span>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo otam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto nt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut consequuntur magni dolores eos qui
                ration.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo otam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto nt explicabo. Nemo
                enim ipsam voluptatem quia aspernatur aut.</p>
            <ul className="email-phone">
                <li>Email:<a
                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#4d24232b220d3a282928352c203d2128632e2220"><span
                        className="__cf_email__"
                        data-cfemail="f59c9b939ab5829091908d9498859990db969a98">[email&#160;protected]</span></a>
                </li>
                <li>Phone:<a href="tel:908786789786">+(908) 786 789 78 6</a></li>
                <li>Website:<a href="#"><span className="__cf_email__"
                    data-cfemail="f58c9a80879b949890b59c9b939adb969a98">[email&#160;protected]</span></a>
                </li>
                <li>Address:<a href="#">14/A, Kilix Home Tower, NYC</a></li>
            </ul>
            <div className="social-link">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="flaticon-067-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/" target="_blank">
                            <i className="flaticon-066-twitter-2"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="flaticon-068-instagram-3"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i className="flaticon-069-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <TeamProfessionalSkills />
            <div className="team-details-image" data-aos="fade-in" data-aos-duration="900">
                <img src={aboutImg} alt="image" />
            </div>
        </div>)
}

export default TeamRobert