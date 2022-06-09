import React from 'react'
import { Layout, Menu } from 'antd'
import logo from '../../logo.svg'
import { menuItems } from '../../config/menus'

const { Sider } = Layout

export const SideMenu = () => {
  return (
    <Sider>
      <img src={logo} alt={'Test Logo'} />
      <Menu>
        {menuItems.map(menu => {
          const { icons, label, path } = menu
          return (
            <Menu.Item key={path} icon={icons}>
              {label}
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}
