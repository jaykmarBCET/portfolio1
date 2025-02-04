import {contactAnimated} from '../animation/HomeAnime'
import { useGSAP } from '@gsap/react';
import axios from "axios"
// import { set } from 'mongoose';
import { useEffect,useState } from 'react';


const Contact =({id}) => {
  const [data , setData] = useState({})
  
  useEffect( ()=>{
    const getData = async()=>{
      const allData = await axios.get('/api')
      setData(allData)
    }

    getData()
   
  },[])
  useGSAP(()=>{
    contactAnimated()
  })
  console.log(data.data);
  return (
    <div id={id??"box"} className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-black text-white">
      <h1 className="text-3xl text-center font-bold mb-4">Get in Touch</h1>
      <form className="w-full max-w-lg mx-auto rounded-lg bg-white px-7 py-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="jane.doe@example.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Your message here..." />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;