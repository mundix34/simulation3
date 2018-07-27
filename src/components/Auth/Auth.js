import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {addPassword, addUserName} from '../../ducks/reducer';


class Auth extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         username: '',
    //         password: '',
    //         users: []
    //     }
    //     this.addUserName = this.addUserName.bind(this);
    //     this.addPassword = this.addPassword.bind(this);
    //     this.registerUser = this.registerUser.bind(this);
    // }
    // addUserName(val) {
    //     this.setState({
    //         username: val
    //     })
    // }
    // addPassword(val) {
    //     this.setState({
    //         password: val
    //     })
    // }
    registerUser() {
        let reg = {
            username: this.props.username,
            password: this.props.password
        }
        axios.post('/api/register', reg).then((res) => {
            console.log(res);
            
            this.setState({ users: res.data })
        })
    }



render() {
    return (
        <div className="App">
            Auth
          <input onChange={(e) => this.props.addUserName(e.target.value)}></input>
            <input onChange={(e) => this.props.addPassword(e.target.value)}></input>
            <button onClick={() => this.props.registerUser()}> Register</button>
            <button> Login</button>

        </div>
    );
}
}

function mapStateToProps(state) {
    const { username, password} = state
    return {
        username,
        password


    }
}
export default connect(mapStateToProps, {addUserName, addPassword})(Auth);
