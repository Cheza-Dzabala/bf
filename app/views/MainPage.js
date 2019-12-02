import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import Menu from "../components/partials/Menu";

export default class MainPage extends Component {
    render() {
        const options = [
            { key: 1, text: 'Average Rating', value: 1 },
            { key: 2, text: 'Name', value: 2 },
            { key: 3, text: 'Description', value: 3 },
        ];
        return (
            <div className="header">
                <Menu />
                <div className="search-bar">
                    <Dropdown clearable options={options} selection placeholder="Search By...." />
                    <div className="ui icon input">
                        <input type="text" placeholder="Search Accommodations..." />
                        <i className="search icon" />
                    </div>
                </div>
            </div>
        );
    }
}
