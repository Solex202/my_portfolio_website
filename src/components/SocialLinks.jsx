import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/> 
                </>
            ),
            href: 'https://www.linkedin.com/in/onwuka-lotachukwu-4aaa40236/',
            style: 'rounded-tr-md shadow-blue-500'
        },
        {
            id: 2,
            child:(
                <>
                Email <HiOutlineMail size={30}/> 
                </>
            ),
            href: 'mailto:christiansolomon592@gmail.com',
            
        },
        {
            id: 3,
            child:(
                <>
                Github <FaGithub size={30}/> 
                </>
            ),
            href: 'https://github.com/Solex202',
            
        },
        {
            id: 4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/> 
                </>
            ),
            href: '/resume (4).pdf',
            style: 'rounded-tr-md',
            download: true,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key={id}
                // eslint-disable-next-line
                className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                    <a
                    href={href} 
                    className='flex justify-between 
                    items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel="noreferrer">
                        
                    {child}
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks