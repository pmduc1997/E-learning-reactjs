import React, { Component } from 'react'
import { Layout } from 'antd'
const { Header } = Layout
import './styles.css'
export default class CustomHeader extends Component {
    render() {
        return (
            <Header className="header">
                <div className="userInfo">
                    <img src="https://i.pinimg.com/474x/4f/70/f2/4f70f28404941cbd22bc879f52f22c31.jpg" alt="Avatar" className="avatar" />
                    <text className="username">Tanjirou</text>
                </div>
            </Header>
        )
    }
}
