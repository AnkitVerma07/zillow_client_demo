import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Badge,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  async returnToLogin() {
    // const confirmLogout = await this.props.logout();
    // return this.props.history.replace('/login');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
        <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarMinimize}>&#9776;</NavbarToggler>
        <Nav className="ml-auto" navbar>
          <NavItem className="pr-2 pr-sm-2">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
              <DropdownToggle className="nav-link dropdown-toggle">
              </DropdownToggle>
              <DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
                <DropdownItem onClick={() => this.returnToLogin()}><i className="fa fa-lock"/> Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header;

