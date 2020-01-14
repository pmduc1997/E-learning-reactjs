import React, { Component } from 'react'
import { Input, Checkbox, Button } from 'antd';
import styles from './styles'
import logo from '../../images/icon-512x512.png'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true,
            credentials: {
                username: '',
                password: ''
            },
        }
    }
    _onLogin = () => {
        if(isAuthenticated == true){
            
        }
    }
    _onChangeCredentials = (e) => {
        this.setState({
            ...this.state,
            credentials: {
                ...this.state.credentials,
                [e.target.id]: e.target.value
            }
        }, () => console.log(this.state))
    }
    render() {
        return (
            <div style={styles.container}>
                <img src={logo} style={styles.logo} />
                <div style={styles.loginBox}>
                    <div style={styles.credentials}>
                        <text style={styles.label}>Username</text>
                        <Input placeholder="Username" size="large" id="username" onChange={this._onChangeCredentials} />
                    </div>
                    <div style={styles.credentials} >
                        <text style={styles.label}>Password</text>
                        <Input placeholder="Password" size="large" id="password" onChange={this._onChangeCredentials} />
                    </div>
                    <div style={styles.more}>
                        <Checkbox >Remember me</Checkbox>
                        <Button type="primary" size="large" onClick={this._onLogin}>Log in</Button>
                    </div>
                </div>
                <text style={styles.forgot}>Forgot your password ?</text>
            </div>
        )
    }
}
