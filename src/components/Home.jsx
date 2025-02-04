import image1 from '../assets/img/image1.png';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import Cv from './Cv';
import { titleAnimation, scrollAnimation ,scrollAbout} from '../animation/HomeAnime'

function Home() {


  useGSAP(() => {
    titleAnimation()
    gsap.context(()=>{

      scrollAnimation()
      scrollAbout()
    })
  }, [])
  return (
    <div className="bg-black home flex flex-col m-auto px-4 md:px-8 lg:px-16">
      <h1 className="mt-20 text-4xl font-bold text-white shadow-xl text-center pt-20  heading1">Welcome to My Creative Space</h1>
      <div id='heading' className="name flex mt-6">
        <div id='box' className="flex gap-x-96  items-center  justify-between flex-wrap mx-auto mt-6 ">
          <div className='title mx-auto  max-w-xs h-auto flex flex-col justify-center p-4'>
            <h1 className='name1 text-2xl font-semibold text-center'>My name Jay Kumar</h1>
            <p className='text-center text-lg font-bold'>I am a developer</p>
            <p className='text-sm text-center font-semibold'>Frontend | Backend | Fullstack | React | Next Js | React Native | Expo | DSA | MongoDB | Core Java | JDBC</p>
            <div className='mx-auto bg-blue-500 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out delay-150 py-2 mt-5'>
              <NavLink to={"/cv"} className='btn'>Show CV</NavLink>
            </div>
          </div>

          <div className='img mx-auto  max-w-md h-auto mt-4 md:mt-0 md:mr-14'>
            <img className='w-full h-auto' src={image1} alt="Jay Kumar" />
          </div>
        </div>
      </div>
      <div id='page1'>
        
          <About  id={"box"} />
       

      </div>
      <div id='page2'>

        <Projects id={"box"} />
      </div>
      <div id='page3'>

        <Skills  id={"box"} />
      </div>
      <div  id='page4'>

        <Contact id={"box"} />
      </div>
    </div>
  );
}

export default Home;
