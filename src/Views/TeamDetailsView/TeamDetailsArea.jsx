import React from 'react'
import TeamDetailsPersonalView from './TeamDetailsPersonalView'
import TeamRobert from './TeamRobert'

const TeamDetailsArea = () => {
    return (
        <div className="team-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <TeamDetailsPersonalView />
                    </div>
                    <div className="col-lg-6">
                        <TeamRobert />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamDetailsArea