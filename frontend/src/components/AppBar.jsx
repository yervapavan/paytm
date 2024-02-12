import React from 'react'

function AppBar({PayU,name}) {
  return (
    <div className='flex justify-between w-full  text-center text-black font-sans  font-medium text-xl bg-white shadow-md mb-3  h-14 '>
    <div className=' flex flex-col justify-center'>
        {PayU} Dashboard
    </div>
    <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 hover:bg-slate-100 cursor-pointer">
                <div className="flex flex-col justify-center h-full text-xl ">
                    {name[0]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBar