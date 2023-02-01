import React from 'react';
import { Navbar, NavItem, Nav, NavbarBrand } from 'reactstrap';
import Carro from './Carro';

class Navegacion extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Carro />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Navegacion;
