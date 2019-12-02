import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        const changeValue = (e) => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        }

        const submitForm = (e) => {
            const { props } = this;
        }

        return (
            <div className="column">
                <div className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <div className="ui left icon input">
                            <input type="text" name="firstName" placeholder="Email" onChange={changeValue} />
                            <i className="envelope icon"></i>
                        </div>
                    </div>

                    <div className="field">
                        <label>Last Name</label>
                        <div className="ui left icon input">
                            <input type="text" name="lastName" placeholder="Email" onChange={changeValue} />
                            <i className="envelope icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input type="text" name="email" placeholder="Email" onChange={changeValue} />
                            <i className="envelope icon"></i>
                        </div>
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input type="password" name="password" placeholder="Password" onChange={changeValue} />
                            <i className="lock icon"></i>
                        </div>
                    </div>
                    <div className="ui blue submit button" onClick={submitForm}>Login</div>
                    <Link to="/signin">Login Instead</Link>
                </div>
            </div>
        )
    }
}

export default SignupForm;