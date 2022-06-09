import React from 'react'
import { Layout } from 'antd'
import { SideMenu } from './SideMenu'

const { Content, Footer, Header } = Layout

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Header>Header Layout</Header>
        <Content>Content Layout</Content>
        <Footer>Footer Layout</Footer>
      </Layout>
    </Layout>
  )
}
