import { Outlet,Link } from "react-router-dom" 
import Login from "../components/Login"
import { usePortFolioStore } from "../store/PortfolioStore"
import { useEffect } from "react"
import { useAuthStore } from "../store/Auth.store"
function Home() {
  const {getProject, getFrontend,getBackends,getSkills,getPrograming} = usePortFolioStore()
  const {user} = useAuthStore()

  async function grabData(){

    await getProject()
    await getPrograming()
    await getBackends()
    await getFrontend()
    await getBackends(),
    await getSkills()

  }

  useEffect(()=>{
    grabData()
  },[user])
  return (
    <div className="bg-[#fff] relative flex flex-col min-w-screen min-h-screen items-center">
    <nav className="flex bg-[#8042] h-16 items-center pl-4 gap-4 w-screen">
        <Link className="bg-[#4562] px-3 py-1 rounded-lg shadow-lg hover:bg-[#9043] "  to={"project-page"}>Project</Link>
        <Link className="bg-[#4562] px-3 py-1 rounded-lg shadow-lg hover:bg-[#9043] "  to={"skill-page"}>Skill</Link>
        <Link className="bg-[#4562] px-3 py-1 rounded-lg shadow-lg hover:bg-[#9043] "  to={"programing-page"}>Programing</Link>
        <Link className="bg-[#4562] px-3 py-1 rounded-lg shadow-lg hover:bg-[#9043] "  to={"backend-page"}>Backend</Link>
        <Link className="bg-[#4562] px-3 py-1 rounded-lg shadow-lg hover:bg-[#9043] " to={"frontend-page"}>Frontend</Link>

    </nav>
    <Outlet/>
    <h1 className="bg-[#8053]   w-72 px-4 text-center py-2 ">this field only for owner </h1>
    <Login/>
    </div>
  )
}

export default Home