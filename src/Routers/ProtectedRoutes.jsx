import {Outlet,Navigate } from 'react'

const protactedRoutes = ()=> {
  const user = null
  return user ? <Outlet/> : <Navigate to = '/Signup'/>
      
}

export default protactedRoutes;
