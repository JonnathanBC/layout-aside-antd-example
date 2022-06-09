import React from 'react';
import { BookOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';

export const menuItems = [
  {
    icons: <HomeOutlined />,
    label: 'Home',
    path: '/'
  },

  {
    icons: <BookOutlined />,
    label: 'Users',
    path: '/users'
  },
  {
    icons: <UserAddOutlined />,
    label: 'Notes',
    path: '/notes'
  }
]