import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import {useGSAP} from "@gsap/react"
import {navigation, navLinkHover} from '../animation/HomeAnime'

function Heading({id}) {
  const [toggle, setToggle] = useState(false);
   useGSAP(()=>{
    navigation()
    navLinkHover()
   },[toggle])
  return (
    <div id={id} className={`fixed z-10 navigation flex flex-wrap h-auto w-full  rounded-b-lg justify-between pt-6 pb-3 px-5 ${toggle?"bg-blue-500":""}`}>
      <div className="heading flex">
        <img
          className="w-10 h-10 rounded-full hover:scale-110"
          src="https://avatars.githubusercontent.com/u/176319088?v=4"
          alt="logo"
        />
      </div>
      <div className="flex justify-between items-center mr-8">
        {toggle ? (
          ""
        ) : (
          <IoMenu className="text-4xl menu text-white" onClick={() => setToggle(!toggle)} />
        )}
      </div>
      {toggle && <List toggle={toggle} setToggle={setToggle} />} {/* Conditionally render the List */}
    </div>
  );
}

export default Heading;

const List = ({toggle,  setToggle}) => {

  return (
    <ul className="flex flex-wrap  list-none gap-3 font-bold">
        <button>
        <RxCross2 className="text-4xl pb-2 text-white menu" onClick={() => setToggle(!toggle)} />
        </button>
      <li className="w-20 navItem ">
        <NavLink
          className={({ isActive }) =>
            isActive ? " animated bg-black py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black ":" animated py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black "
          }
          to="/"
        >
          Home
        </NavLink>
      </li >
      <li className="w-30 navItem">
        <NavLink
          className={({ isActive }) =>
            isActive ? " animated bg-black py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black ":" animated py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black "
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          className={({ isActive }) =>
            isActive ? " animated bg-black py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black ":" animated py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black "
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          className={({ isActive }) =>
            isActive ? " animated bg-black py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black ":" animated py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black "
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          className={({ isActive }) =>
            isActive ? " animated bg-black py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black ":"animated py-2 px-4 text-white font-bold shadow-lg rounded-lg mx-1 hover:bg-black "
          }
          to="/skills"
        >
          Skills
        </NavLink>
      </li>
      
    </ul>
  );
};
