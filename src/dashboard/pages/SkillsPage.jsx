import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function SkillPage() {
  return (
    <div className='flex flex-col '>
      <nav className='flex bg-[#8923] gap-4 px-4 rounded-md text-center py-2 mt-2'>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"add"}>Add Skill</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"delete"}>Delete Skill</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"update"}>Update Skill</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default SkillPage