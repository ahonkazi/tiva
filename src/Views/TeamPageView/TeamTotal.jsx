import React from 'react'
import TeamTotalCard from './TeamTotalCard'

const TeamTotal = () => {
    const teamCounts = [
        { numbers: 500, countTitle: "Project Done", iconClass: "flaticon-075-rocket" },
        { numbers: 250, countTitle: "Cup Of Tea", iconClass: "flaticon-053-coffee" },
        { numbers: 120, countTitle: "Total Employee", iconClass: "flaticon-065-businessman" },
        { numbers: 50, countTitle: "Win Awards", iconClass: "flaticon-108-medal" },
    ]
    return (

        <div className="total-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {
                        teamCounts.map(item =>

                            <div className="col-lg-3 col-md-6">
                                <TeamTotalCard count={item.numbers} iconClass={item.iconClass} title={item.countTitle} />
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default TeamTotal