import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavbarToggler
} from "reactstrap";

import XantoloLogo from '../../assets/img/xantolo-icon.png'

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light fixed="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={XantoloLogo} alt="" />Xantolo<small>.mx</small>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/gastronomia/">Gastronomia</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/danza/">Danza</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Eventos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;