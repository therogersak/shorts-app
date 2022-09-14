import React from 'react'
import "boxicons";


function Sideitem({icon , name}) {
  return (
    <>
    <div className='py-3 flex items-center gap-3 p-5 hover:bg-gray-800 hover:text-white'>
    <box-icon name={icon} color='gray' ></box-icon>
        <span className='text-gray-500'>{name}</span>
    </div>
    </>
  )
}

export default Sideitem