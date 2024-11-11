import React from 'react'
import {Outlet} from 'react-router-dom'
import Menu from './components/Menu/Menu'
import MainPage from './components/MainPage/MainPage'
import Header from './components/Header/Header'

function Layout() {


  return (
    <div className='flex min-h-screen'>
        <Menu/>
        <MainPage>
            <Header/>
            <Outlet/> 
        </MainPage>          
    </div>
  )
}

export default Layout