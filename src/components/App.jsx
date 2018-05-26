import React, { Component, Fragment } from 'react'
import './main.css'
import NavBar from './navbar/NavBar'
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
import {
    Button, ButtonToolbar, ButtonGroup, Label,
    Navbar, Nav, NavItem, MenuItem, NavDropdown
} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import actions from '../actions'
import Register from './register'

@connect(({ state }) => ({
    value: state.counter.value,
    authenticate: state.authenticate
}))
class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('App Component props : ', this.props)
    }
    render() {
        return (
            <Router >
                <div>
                    <NavBar {...this.props} />
                    <Route exact path="/" />
                    <Route path="/login" component={Login} />
                    <Route path="/register" />
                </div>
            </Router >
        )
    }
}



const Login = (props) => {
    const loginAsyncPost = () => {
        fetch('http://localhost:3020/' + 'login', {
            credentials: 'include',
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: 'Dima' })
        }).then(console.log)
    }
    const loginAsyncGet = () => {
        fetch('http://localhost:3020/' + 'login', {
            credentials: 'include',
            method: 'get',
        })
            .then(res => res.json())
            .then(console.log)
    }

    const str = 'Helo'.split('').map(c => <span>{c}</span>)
    return (
        <Grid container display={'flex'} direction={'row'} justify={'center'} alignItems>
            <div style={{ backgroundColor: 'red', width: '200px', height: '250px' }}></div>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        value: state.counter.value,
        authenticate: state.authenticate
    }
}

const ex = connect(mapStateToProps, actions)(App);



export default App