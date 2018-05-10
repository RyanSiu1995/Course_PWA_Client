import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import DownloadableModal from './DownloadableModal';
import NavItems from './NavItems';


export default class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {

    return (
      <div>
        <Navbar color="dark" dark expand="md">

          {/*
            <NavbarBrand>
            <DownloadableModal buttonLabel="Offline" />
          </NavbarBrand>
          */}
          
          
          <NavbarBrand href="/">{this.props.brandName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="mr-auto" navbar>
              <NavItems navItems={this.props.navItems}/>
            </Nav>

          </Collapse>

        </Navbar>
      </div>
    );
  }
}
