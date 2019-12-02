import React, { Component } from 'react'

export default class socialAuth extends Component {
    render() {
        return (
            <div className="social-auth">
                <button className="ui facebook button">
                    <i className="facebook icon"></i>
                    Facebook
                    </button>
                <button className="ui google plus button large">
                    <i className="google plus icon"></i>
                    Google
                    </button>
            </div>
        )
    }
}
