import React from 'react'

const TeamProfessionalSkills = () => {
    return (
        <div className="professional-skills">
            <div className="expert-content">
                <h2>Professional Skills</h2>
                <div className="skills">
                    <div className="skill-item">
                        <div className="skill-header">
                            <h3 className="skill-title">Business Consulting</h3>
                            <div className="skill-percentage">
                                <div className="count-box counted"><span className="count-text"
                                    data-speed="2000" data-stop="82">85</span>%</div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="95" style={{ width: "85%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-header">
                            <h3 className="skill-title">Money Management</h3>
                            <div className="skill-percentage">
                                <div className="count-box counted"><span className="count-text "
                                    data-speed="2000" data-stop="90">92</span>%</div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="90" style={{ width: "92%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-header">
                            <h3 className="skill-title">Business Growth</h3>
                            <div className="skill-percentage">
                                <div className="count-box counted"><span className="count-text "
                                    data-speed="2000" data-stop="90">80</span>%</div>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="90"style={{ width: "80%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default TeamProfessionalSkills