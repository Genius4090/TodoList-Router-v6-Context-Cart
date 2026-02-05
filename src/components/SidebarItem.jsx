import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarItem({item,openSidebar}) {
  return (
   
    <NavLink to={item.link} className={`flex items-center justify-center  gap-4 px-4 sidebar-link  ${openSidebar && "justify-start"}`}>
    <div className="py-2 px-2">
     {item.icon}
    </div>
    <p className={` text-lg hidden opacity-0 ${openSidebar && "opacity-100 inline"}`}>{item.title}</p>
    </NavLink>
  )
}

export default SidebarItem