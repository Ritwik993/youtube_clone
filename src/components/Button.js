import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='p-2 bg-gray-100 m-2 rounded'>{name}</button>
    </div>
  )
}

export default Button