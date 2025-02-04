import { Outlet,Link } from 'react-router-dom'

function FrontendPage() {
  return (
    <div className='flex flex-col '>
      <nav className='flex bg-[#8923] gap-4 px-4 rounded-md text-center py-2 mt-2'>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"add"}>Add Frontend</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"delete"}>Delete Frontend</Link>
        <Link className='bg-[#2342] px-2 py-1 rounded-lg shadow-md' to={"update"}>Update Frontend</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default FrontendPage