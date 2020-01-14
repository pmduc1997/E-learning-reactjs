import React, { Component } from 'react'
import { Layout } from 'antd'
const { Content } = Layout

import { Switch, Route, Router } from 'react-router-dom';
import { routes } from './routesSider'
import Dashboard from '../../Dashboard'
export default class CustomContent extends Component {
    render() {
        return (
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                }}
            >
                <Switch>
                    {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))}
                </Switch>
            </Content>
        )
    }
}
