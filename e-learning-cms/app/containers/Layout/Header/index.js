import React, { Component } from 'react'
import { Layout, Typography, Dropdown, Menu } from 'antd'
const { Text } = Typography
const { Header } = Layout
import './styles.css'
import { Redirect } from 'react-router-dom'
export default class CustomHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true
        }
    }
    _onLogout = () => {
        localStorage.removeItem('token')
        this.setState({
            ...this.state,
            isAuthenticated: false
        })
    }
    menu = () => {
        return (
            <Menu>
                <Menu.Item onClick={this._onLogout}>
                    <Text>Logout</Text>
                </Menu.Item>
            </Menu>
        )
    }

    render() {
        if (!this.state.isAuthenticated) {
            return <Redirect to="login" />
        }
        return (
            <Header className="header">
                <Dropdown overlay={this.menu} trigger={['click']}>
                    <div className="userInfo">
                        <img src="https://i.pinimg.com/474x/4f/70/f2/4f70f28404941cbd22bc879f52f22c31.jpg" alt="Avatar" className="avatar" />
                        <Text className="username">Tanjirou</Text>
                    </div>
                </Dropdown>
            </Header>
        )
    }
}
