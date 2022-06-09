import React from 'react'
import { Layout } from 'antd'

const { Content, Footer, Header, Sider } = Layout

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>Sider Layout</Sider>
      <Layout>
        <Header>Header Layout</Header>
        <Content>Content Layout</Content>
        <Footer>Footer Layout</Footer>
      </Layout>
    </Layout>
  )
}
