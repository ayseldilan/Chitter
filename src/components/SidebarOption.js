import React from 'react'
import './SidebarOption.css';

function SidebarOption({ text, Icon}) {
  return (
    <div className='sidebar'>
        <Icon />
        
        <h2>  Sidebar  </h2>
        
    </div>
  )
}

export default SidebarOption