import React from 'react'
import "./SideMenu.css"

const sideMenuOptions = ({option, Icon}) => {
  return (
    <div className='flex ml-6'>
        <Icon className="mr-3 mb-5 " /> <span className='text-style'>{option}</span>
    </div>
  )
}

export default sideMenuOptions