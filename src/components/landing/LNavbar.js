import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/logo_black.svg';

class LNavbar extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle () {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <Navbar expand="lg" dark color="white" className="mb-4">
          <Container>
            <NavLink to="/" className="navbar-brand d-fles align-items-center text-dark">
              <img className="mr-2" style={{height: 30}} src={logo} alt="logo" />
              Flembee
            </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-lg-auto" navbar>
                <NavItem className="mx-2">
                  <Button style={{
                        width: 48,
                        height: 48,
                        padding: "6px 0px",
                        borderRadius: 24,
                        fontSize: 14,
                        textAlign: "center",
                        background: "#FFF",
                        color: "#000"
                    }}>EN
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
};

export default LNavbar;
