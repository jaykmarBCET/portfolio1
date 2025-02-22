import './App.css';
import Heading from './components/Heading';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Educational from './components/Educational';
import Experiance from './components/Experiance';
import Home from './components/Home';
import FeedBack from './components/FeedBack';
import Cv from "./components/Cv";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard/pages/Home';


// Dashboard child components
import ProjectPage from './dashboard/pages/ProjectPage';
import SkillPage from './dashboard/pages/SkillsPage';
import ProgramingPage from './dashboard/pages/ProgramingPage';
import BackandPage from './dashboard/pages/BackendPage';
import FrontedPage from './dashboard/pages/FrontendPage';

//projectPage child
import ProjectAdd from './dashboard/components/ProjectAdd';
import ProjectDelete from './dashboard/components/ProjectDelete'
import ProjectUpdate from './dashboard/components/ProjectUpdate'
// Skills child
import SkillsAdd from './dashboard/components/SkillsAdd';
import SkillDelete from './dashboard/components/SkillsDelete'
import SkillUpdate from './dashboard/components/SkillsUpdate'

// programing child
import ProgramingAdd from './dashboard/components/ProgramingAdd'
import ProgramingUpdate from './dashboard/components/ProgramingUpdate'
import ProgramingDelete from './dashboard/components/ProgramingDelete'
//backend child
import BackendAdd from './dashboard/components/BackendAdd';
import BackendDelete from './dashboard/components/BackendDelete';
import BackendUpdate from './dashboard/components/BackendUpdate';
// frontend child
import FrontendAdd from './dashboard/components/FrontendAdd'
import FrontendDelete from './dashboard/components/FrontendDelete'
import FrontendUpdate from './dashboard/components/FrontendUpdate'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Heading />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Heading />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: '/experiance',
    element: (
      <>
        <Heading />
        <Experiance />
        <Footer />
      </>
    ),
  },
  {
    path: '/skills',
    element: (
      <>
        <Heading />
        <Skills />
        <Footer />
      </>
    ),
  },
  {
    path: '/projects',
    element: (
      <>
        <Heading />
        <Projects />
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Heading />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: '/education',
    element: (
      <>
        <Heading />
        <Educational />
        <Footer />
      </>
    ),
  },
  {
    path: '/cv',
    element: (
      <>
        <Heading />
        <Cv />
        <Footer />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'project-page',
        element: <ProjectPage />,
        children:[
          {
            path:"add",
            element:<ProjectAdd/>
          },
          {
            path:"delete",
            element:<ProjectDelete/>
          },
          {
            path:"update",
            element:<ProjectUpdate/>
          }
        ]
      },
      {
        path: 'skill-page',
        element: <SkillPage />,
        children:[
          {
            path:"add",
            element:<SkillsAdd/>
          },
          {
            path:"delete",
            element:<SkillDelete/>
          },
          {
            path:"update",
            element:<SkillUpdate/>
          }
        ]
      },
      {
        path: 'backend-page',
        element: <BackandPage />,
        children:[
          {
            path:"add",
            element:<BackendAdd/>
          },
          {
            path:"delete",
            element:<BackendDelete/>
          },
          {
            path:"update",
            element:<BackendUpdate/>
          }
        ]
      },
      {
        path: 'frontend-page', // Corrected spelling
        element: <FrontedPage />,
        children:[
          {
            path:"add",
            element:<FrontendAdd/>
          },
          {
            path:'delete',
            element:<FrontendDelete/>

          },
          {
            path:"update",
            element:<FrontendUpdate/>
          }
        ]
      },
      {
        path: 'programing-page',
        element: <ProgramingPage />,
        children:[
          {
            path:"add",
            element:<ProgramingAdd/>
          },
          {
            path:"delete",
            element:<ProgramingDelete/>

          },
          {
            path:"update",
            element:<ProgramingUpdate/>
          }
        ]
      },
    ],
  },
]);

function App() {
  return (
    <div className='bg-black relative'>
      <a href="mailto:jaykumar2dear@gmail.com"><FeedBack /></a>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;