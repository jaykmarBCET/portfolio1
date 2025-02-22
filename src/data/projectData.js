import home from '../assets/movie/home.png'
// import image1 from '../assets/img/image1.png'
import chatDialog from '../assets/chats/img/chatdialog.png'
import chatHome from '../assets/chats/img/home.png'
import loginImage from '../assets/login/img/image.png'
const projects = [
  {
    title: 'Movie Search App',
    description: 'Zustand, tailwindcss, react js , gsap,movie search API',
    image: [home],
    link: 'https://movie-search-xi-nine.vercel.app/video'
  },
  {
    title: 'Login App',
    description: 'React , Node js, Tailwindcss , cloudinary, Express, mongodb, jwt, bcrypt ',
    image: [loginImage],
    link: 'https://loginapp-6giz.onrender.com/'
  },
  {
    title: 'Upload Data',
    description: 'cloudinary, next js , mongodb, jwt, bcrypt, tailwindcss, typescript, javascript, shadcn',
    image: [home],
    link: 'https://uploaddata.vercel.app/login'
  },
  {
    title: 'Chat App',
    description: 'express,mongoose,socket.io,react,react toast,multer,cloudinary,mongodb cloud',
    image: [chatHome,chatDialog],
    link: 'https://chat-application-90tm.onrender.com/'
  }
];


export  default projects;