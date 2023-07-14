import Image from 'next/image'
import Head from "next/head";
import Blog from "./blog/page";

export default function Home() 
{
  return (
    <>
      <nav className=''><ul className='flex justify-center'><li  className='m-10 text-2xl font-bold hover:text-gray-500'>Home</li>
      <li className='m-10 text-2xl font-bold hover:text-gray-500'>About</li>
      <li className='m-10 text-2xl font-bold hover:text-gray-500'>blog</li>
      <li className='m-10 text-2xl font-bold hover:text-gray-500'>contact</li></ul></nav>
      <div className='  flex flex-col justify-center items-center  pr-96 pl-96 mt-36' >
        <h1 className='text-center font-extrabold text-8xl  hover:text-gray-500'>CodeSlayer</h1>
        <p className='mt-16 font-mono text-2xl'>The process of slaying bugs  from the code</p>
      </div>
        <div className='mt-10 ml-10' >
          <h1 className='animate-pulse font-mono text-3xl mb-10 font-bold'>Top Blogs</h1>
          <Blog/>
        </div>
        
        </>
  )
}
