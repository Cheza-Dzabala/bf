import React, { Component } from 'react'
import SignupForm from '../components/auth/SignupForm'
import SocialAuth from '../components/auth/SocialAuth';

class SignUp extends Component {
    render() {
        return (
            <div className="signIn">
                <div className="centralized-items">
                    <h4>Sign Up.
                    {/* {
                            loginError ?
                                <div className="error-message">
                                    {loginError.data.message}
                                </div> :
                                loginPending ? ' Please wait.... ' : ''} */}
                    </h4>
                    <div className="ui placeholder segment">
                        <div className="ui two column very relaxed stackable grid">
                            <SignupForm />
                            <SocialAuth />
                        </div>
                        <div className="ui vertical divider">
                            Or
                     </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;