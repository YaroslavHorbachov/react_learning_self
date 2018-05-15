//@flow

import React, { Component } from 'react'
import './App.css'
import NavBar from './navbar/NavBar'
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
import {
    Button, ButtonToolbar, ButtonGroup, Label,
    Navbar, Nav, NavItem, MenuItem, NavDropdown
} from 'react-bootstrap';
import { connect } from 'react-redux';
import actions from '../actions'


class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('App Component props : ', this.props)
    }
    render() {

        return (
            <Router>
                <div>
                    <NavBar {...this.props} />
                    <Route exact path="/" render={() => <Home {...this.props} />} />
                    <Route path="/login" render={() => <Login {...this.props} />} />
                    <Route path="/register" render={() => <Register {...this.props} />} />
                </div>
            </Router >
        )
    }
}


const Register = (props) => {
    return <h1>Topic</h1>
}

const Login = (props) => {
    const { login } = { ...props.actions.authenticateActions }
    return (
        <div className='flex-home'>
            <div className='login'>
                <Button
                    bsStyle="success"
                    bsSize="large" onClick={login}> LOGIN </Button>
            </div>
        </div>
    )
}
class Home extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        console.log('HOME ', this.props)
        const { inc, dec, reset } = { ...this.props.actions.counterActions }
        return (
            <div className='main'>
                <div className='flex-home'>
                    <div className='counter'>
                        <h2><Label bsStyle="info" >
                            COUNTER {this.props.value}</Label></h2>
                    </div>
                    <div className='actions'>
                        <div>
                            <ButtonGroup>
                                <Button
                                    bsStyle="success"
                                    bsSize="large"
                                    onClick={inc}> INCREMENT </Button>
                                <Button
                                    bsStyle="warning"
                                    bsSize="large"
                                    onClick={dec}> DECREMENT </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className='reset'>
                        <Button
                            bsStyle="danger"
                            bsSize="large" onClick={reset}> RESET</Button>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.counter.value,
        authenticate: state.authenticate
    }
}

const ex = connect(mapStateToProps, actions)(App);
console.log('Connect ', ex)
console.log('App ', App)

export default ex