import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    NavItem,
    Button,
    MenuItem,
    Image
} from 'react-bootstrap';
import {animateScroll as scroll} from 'react-scroll';


export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fluid fixedTop >
                <Navbar.Header>
                    <Navbar.Brand>
                        <div style={ { fontWeight: 'bold', fontSize: 18}}>
                           {/* <a href="#brand">Carri-On</a>*/}
                            <a href="http://www.carri-on.com"> <Image src={require("../templates/img/logo.png")} style={ { height: 40, width: 90 } } responsive /></a>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={ 1 } href="#" onSelect={ () => scroll.scrollToBottom()}>
                            Quick Order
                        </NavItem>
                        <NavItem eventKey={ 2 } href="#" onSelect={ () => scroll.scrollTo(1100)}>
                            Why Us?
                        </NavItem>
                        <NavDropdown eventKey={ 3 } title="Services Offered" id="basic-nav-dropdown">
                            <MenuItem eventKey={ 3.1 }>Premium Delivery</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={ 3.2 }> Quick Delivery</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={ 3.3 }>Normal Delivery</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={ 1 } href="#">
                            <Button bsStyle="primary">Become Partner</Button>
                        </NavItem>
                        <NavItem eventKey={ 2 } href="#">
                            <Button bsStyle="info" onClick={ () => scroll.scrollToBottom() }>SignUp </Button>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}