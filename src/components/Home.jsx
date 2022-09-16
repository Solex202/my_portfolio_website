import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link } from 'react-scroll'
import New from "../assets/new.jpg"

const Home = () => {
  return (
    <div name="home" 
        className='flex h-screen w-full bg-gradient-to-b  from-black
        via-black to-gray-800  text-white'>
        
        <div className='flex max-w-screen-lg mx-auto flex-col
        items-center justify-center h-full px-1 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-4xl font-bold '>Hi, I'm Lotachukwu Onwuka <br/> <span className='py-6 text-cyan-400'>Software Engineer</span> </h2>
                
                <div>
                    <Link 
                    to='portfolio'
                    smooth duration={500}
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t
                    from-cyan-500 to-blue-500 cursor-pointer mt-5'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={New} 
                alt='my profile'
                className='rounded-3xl mx-auto w-2/3 md:w-full ml-12'/>
            </div>
        </div>
    </div>
  )
}

export default Home