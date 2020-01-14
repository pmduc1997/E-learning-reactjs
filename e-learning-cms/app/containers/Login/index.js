import React, { Component } from 'react'
import { Input, Checkbox, Button } from 'antd';
import styles from './styles'
import logo from '../../images/icon-512x512.png'
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
            credentials: {
                username: '',
                password: ''
            },
        }
    }
    _onLogin = () => {
        const { username, password } = this.state.credentials
        if (username == 'duc' && password == '1'){
            localStorage.setItem('token',1)
            this.setState({
                ...this.state,
                isAuthenticated:true
            },()=> console.log(this.state))
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
    componentDidMount(){
        if(localStorage.getItem('token')){
            this.setState({
                ...this.state,
                isAuthenticated:true
            })
        }
    }
    render() {
        if (this.state.isAuthenticated) {
            return <Redirect to='' />
        }
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
                        <Input placeholder="Password" type="password" size="large" id="password" onChange={this._onChangeCredentials} />
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
