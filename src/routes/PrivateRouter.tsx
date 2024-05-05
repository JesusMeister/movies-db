import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'

function PrivateRouter() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default PrivateRouter