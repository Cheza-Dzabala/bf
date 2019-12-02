import React, { Component } from 'react';
import {
  Dropdown, Menu, Label, Icon, Image,
} from 'semantic-ui-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary inverted>
        <Menu.Item className="logo">
          <Image src={require('../../assets/images/foot-print.png')} size="mini" />
          <h4>Barefoot Nomad</h4>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="Home"
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Accommodations"
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="My Requests"
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Notifcations"
            active={activeItem === 'notifications'}
            onClick={this.handleItemClick}
          >
            <Icon name="bell" />
            <Label color="red" circular>1</Label>
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown item text="My Account" icon="user circle">
              <Dropdown.Menu>
                <Dropdown.Item>My Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
