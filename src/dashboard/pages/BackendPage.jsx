import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function BackendPage() {
  return (
    <div className='flex flex-col '>
      <nav className='flex bg-[#8923] gap-4 px-4 rounded-md text-center py-2 mt-2'>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"add"}>Add Backend</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"delete"}>Delete Backend</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"update"}>Update Backend</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default BackendPage