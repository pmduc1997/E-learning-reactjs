import React, { Component } from 'react'
import { Layout } from 'antd';
import './styles.css'
import Sider from './Sider'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class CustomLayout extends Component {
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider />
                <Layout>
                    <Header />
                    <Content />
                    <Footer />
                </Layout>
            </Layout>

        )
    }
}
