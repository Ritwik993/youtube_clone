import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";


const Body = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  return (
    <div className={`flex  ${isMenuOpen ? " pl-[200px]" : ''}`}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body