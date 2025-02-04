import home from '../assets/movie/home.png'
import image1 from '../assets/img/image1.png'
import chatDialog from '../assets/chats/img/chatdialog.png'
import chatHome from '../assets/chats/img/home.png'

const projects = [
  {
    title: 'Movie Search App',
    description: 'A simple movie search app that allows users to search for movies by title, release year, or genre. The app uses the TMDB API to fetch movie data and displays the results in a list.',
    image: [home],
    link: 'https://moviesearchbyjay.vercel.app/'
  },
  {
    title: 'Login App',
    description: 'A simple login app that allows users to login with their email and password. The app uses Firebase Authentication to handle user authentication. Google authentication is also available.',
    image: [home],
    link: 'https://loginapp-6giz.onrender.com/'
  },
  {
    title: 'Inspire IDE App',
    description: 'A simple IDE app that allows users to write and run code. The app uses the CodeMirror library to handle code editing and execution. The app also includes features like syntax highlighting, code completion, and debugging.',
    image: [home],
    link: 'https://www.google.com'
  },
  {
    title: 'Chat App',
    description: 'A chatting application using express server and react js with socket.io in this project also have chatbot to chat with ai. key point(express,mongoose,socket.io,react,react toast,multer,cloudinary,mongodb cloud)',
    image: [chatHome,chatDialog],
    link: 'https://chat-application-90tm.onrender.com/'
  }
];


export  default projects;