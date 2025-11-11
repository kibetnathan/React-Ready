import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet, Link } from 'react-router-dom'

function Docs() {
  return (
    <>
    <Sidebar />
    <Outlet />
    </>
  )
}

export default Docs