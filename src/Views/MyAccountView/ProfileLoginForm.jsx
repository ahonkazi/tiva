import React from 'react'

const ProfileLoginForm = () => {
    return (
        <div class="login-form">
            <h2>Login</h2>
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
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="checkme" />
                            <label class="form-check-label" for="checkme">Remember me</label>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                        <a href="#" class="lost-your-password">Forgot your password?</a>
                    </div>
                </div>
                <button type="submit" class="default-btn">Login</button>
            </form>
        </div>)
}

export default ProfileLoginForm