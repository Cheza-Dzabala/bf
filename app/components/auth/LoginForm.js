import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/LoginActions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { loginSuccess } = this.props.login;
    const changeValue = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };

    const submitForm = (e) => {
      const { props } = this;
      props.loginUser(this.state);
    };

    if (loginSuccess.status === 200) {
      const { token } = loginSuccess.data.data;
      window.localStorage.setItem('token', token);
      return <Redirect to="/" />;
    }

    return (
            <div className="column">
                <div className="ui form">
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input type="text" name="email" placeholder="Email" onChange={changeValue} />
                            <i className="envelope icon" />
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input type="password" name="password" placeholder="Password" onChange={changeValue} />
                            <i className="lock icon" />
                        </div>
                    </div>
                    <div className="ui blue submit button" onClick={submitForm}>Login</div>
                    <Link to="/signup">Register Instead</Link>
                </div>
            </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  login: state.login,
});
export default connect(mapStateToProps, { loginUser })(LoginForm);
