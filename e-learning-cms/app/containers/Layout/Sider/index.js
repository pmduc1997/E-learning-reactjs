import React, { Component } from 'react'

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
import './styles.css'

import { Link } from 'react-router-dom'
export default class CustomSider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            siderItems: [
                {
                    key: '1',
                    name: 'Dashboard',
                    icon: 'dashboard'
                },

                {
                    key: '2',
                    name: 'User',
                    icon: 'user'
                },
            ]
        }
    }
    render() {
        const { siderItems } = this.state
        return (
            <Sider
                breakpoint="lg"
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys="1">
                    {siderItems.map((item, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.

                        <Menu.Item className="siderItem" key={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
        )
    }
}
