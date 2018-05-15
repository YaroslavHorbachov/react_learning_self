import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const NavBar = (props) => {
    const { auth } = { ...props.authenticate }
    const menu = auth ? (
        <Nav pullRight>
            <NavDropdown title="Menu" id='dropdown - menu'>
                < MenuItem > Profile</MenuItem >
                <MenuItem >Calories</MenuItem>
                <MenuItem >Food Basket</MenuItem>
                <MenuItem divider />
                <MenuItem >Logout</MenuItem>
            </NavDropdown >
        </Nav>
    ) : null
    return (
        <Navbar inverse fluid staticTop collapseOnSelect className='navbar-expand-sm'>
            <Navbar.Header>
                <Navbar.Brand>
                    <a>Log Page</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem componentClass={Link} href='/' to='/'>Home</NavItem  >
                <NavItem componentClass={Link} href='/login' to='/login'>Login</NavItem>
                <NavItem componentClass={Link} href='/register' to='/register'>Register</NavItem>
            </Nav>
            {menu}
        </Navbar>
    )

}
const mapStateToProps = (state, ownProps) => {
    console.log('NavBar region ', state, ownProps)
    return {
     /*    value: state.counter.value,
        authenticate: state.authenticate
     */}
}
export default connect(mapStateToProps, null)(NavBar)
