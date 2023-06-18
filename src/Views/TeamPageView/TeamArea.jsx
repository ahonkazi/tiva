import React from 'react'
import TeamCard from './TeamCard'


// img

import team1 from "../../assets/images/team/team-1.jpg"
import team2 from "../../assets/images/team/team-2.jpg"
import team3 from "../../assets/images/team/team-3.jpg"
import team4 from "../../assets/images/team/team-4.jpg"
import team5 from "../../assets/images/team/team-5.jpg"
import team6 from "../../assets/images/team/team-6.jpg"
import team7 from "../../assets/images/team/team-7.jpg"
import team8 from "../../assets/images/team/team-8.jpg"
import TeamPagination from './TeamPagination'
const TeamArea = () => {

    const teams = [

        {
            img: team1, username: "Robert Brown", position: "Founder & CEO"
        },
        {
            img: team2, username: "Leilani Savannah", position: "Engineer"
        },
        {
            img: team3, username: "Maverick Andrew", position: "Marketing Expert"
        },
        {
            img: team4, username: "Aubrey Autumn", position: "Engineer"
        },
        {
            img: team5, username: "Brooklyn Alice", position: "Designer"
        },
        {
            img: team6, username: "Jayden Gabriel", position: "Engineer"
        },
        {
            img: team7, username: "Audrey Aaliyah", position: "Researcher"
        },
        {
            img: team8, username: "Matthew Julian", position: "Programmer"
        },
    ]
    return (
        <div className="team-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center" data-cues="slideInUp" data-duration="900">
                    {

                        teams.map(item =>
                            <div className="col-lg-3">
                                <TeamCard personName={item.username} personProfile={item.position} cardImg={item.img} />
                            </div>

                        )
                    }





                </div>
            </div>
            <TeamPagination />
        </div>

    )
}

export default TeamArea