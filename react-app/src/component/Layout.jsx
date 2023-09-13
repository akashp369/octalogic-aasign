import React from 'react'
import SideBar from '../pages/SideBar'
import Home from './Home'
import '../styles/Layout.css'

const Layout = () => {
  return (
    <div className='layout_container'>
      <SideBar />
      <Home />
    </div>
  )
}

export default Layout
