import React from 'react'
import ProfileLoginForm from './ProfileLoginForm'
import ProfileSignupForm from './ProfileSignupForm'

const ProfileAuthArea = () => {
    return (
        <div class="profile-authentication-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <ProfileLoginForm />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <ProfileSignupForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAuthArea