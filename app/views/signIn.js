import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/auth/LoginForm';
import SocialAuth from '../components/auth/SocialAuth';

class SignIn extends Component {
  render() {
    const { loginError, loginPending, loginSuccess } = this.props.login;

    return (
      <div className="signIn">
        <div className="centralized-items">
          <h4>
            Welcome to barefoot nomad. Please sign In.
{
              loginError
                ? (
                  <div className="error-message">
                    {loginError.data.message}
                  </div>
                )
                : loginPending ? ' Please wait.... ' : ''
            }
          </h4>
          <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
              <LoginForm />
              <SocialAuth />
            </div>
            <div className="ui vertical divider">
              Or
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});


export default connect(mapStateToProps)(SignIn);
