import React from 'react'

function Button({buttontext,onClick}) {
  return (
    <div>
        <button onClick={onClick} className='box-border w-full text-white bg-black text-center pt-3 pb-3 text-sm font-medium rounded hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 mb-2 me-2'>{buttontext}</button>
    </div>
  )
}

export default Button