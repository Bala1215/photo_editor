import React from 'react'

export default function SlideBarItem({name, active , handleClick}) {
  return (
    
        <button className={`sidebar-item ${active ? `active` : ``}`}
                onClick={handleClick}
        >
        {name}
        </button>
    
  )
}
