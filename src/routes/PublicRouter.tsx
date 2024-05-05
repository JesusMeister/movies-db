import { Outlet } from 'react-router-dom'

import React from 'react'
import { Header } from '../components/Header'

function PublicRouter() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default PublicRouter