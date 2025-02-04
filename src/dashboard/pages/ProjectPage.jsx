import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function ProjectPage() {
  return (
    <div className='flex flex-col '>
      <nav className='flex bg-[#8923] gap-4 px-4 rounded-md text-center py-2 mt-2'>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"add"}>Add Project</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"delete"}>Delete Project</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"update"}>Update Project</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default ProjectPage