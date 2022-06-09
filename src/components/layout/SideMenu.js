import React from 'react'
import { Layout } from 'antd'
import logo from '../../logo.svg'

const { Sider } = Layout

export const SideMenu = () => {
  return (
    <Sider>
      <img src={logo} alt={'Test Logo'} />
    </Sider>
  )
}
