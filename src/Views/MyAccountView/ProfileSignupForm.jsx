import React from 'react'

const ProfileSignupForm = () => {
    return (
        <div class="register-form">
            <h2>Register</h2>
            <form>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Email or Phone</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="text" class="form-control" />
                </div>
                <p class="description">The password should be at least eight characters long. To make it
                    stronger, use upper and lower case letters, numbers, and symbols like</p>
                <button type="submit" class="default-btn">Register Now</button>
            </form>
        </div>)
}

export default ProfileSignupForm