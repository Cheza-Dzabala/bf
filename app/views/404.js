import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends Component {
  render() {
    return (
            <div className="page-not-found">
                <span>
                    <h4>Page Not Found</h4>
                    <p>This is not the page you are looking for</p>
                    <Link to="/">Go Home</Link>
                </span>
            </div>
    );
  }
}
