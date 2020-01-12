import React, { Component } from 'react'
import { Input, Checkbox, Button } from 'antd';
import './styles.css'
import logo from '../../images/icon-512x512.png'
export default class Login extends Component {
    render() {
        return (
            <div className="container">
                    <img src={logo} className="logo" />
                <div className="login-box">
                    <div className="credentials">
                        <text className="label">Username</text>
                        <Input placeholder="Username" size="large" />
                    </div>
                    <div className="credentials">
                        <text className="label">Password</text>
                        <Input placeholder="Password" size="large" />
                    </div>
                    <div className="more">
                        <Checkbox >Remember me</Checkbox>
                        <Button type="primary" size="large">Log in</Button>
                    </div>
                </div>
                <text className="forgot">Forgot your password ?</text>
            </div>
        )
    }
}
