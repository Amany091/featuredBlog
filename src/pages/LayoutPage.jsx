import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterPage from '../components/Footer'
import MainHeader from '../components/MainHeader'


const LayoutPage = () => {
  return (
    <div>
      <MainHeader/>
      <main>
      <Outlet />

      </main>
      <FooterPage/>
    </div>
  )
}

export default LayoutPage
