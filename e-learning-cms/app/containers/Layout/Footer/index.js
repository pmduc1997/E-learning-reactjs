import React, { Component } from 'react'
import { Layout } from 'antd'
const { Footer } = Layout
import './styles.css'
export default class CustomFooter extends Component {
    render() {
        return (
            <Footer className="footer">
                Bản quyền thuộc về MTA
                </Footer>
        )
    }
}

