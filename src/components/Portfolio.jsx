import React from 'react'

const Portfolio = () => {

    

    const portfolios = [
        {
            id: 1,
            link: 'https://github.com/Solex202/House_management_system_with_SpringSecurity'
        },
        {
            id: 2,
            link: 'https://github.com/Solex202/budgetApp'
        },
        {
            id: 3,
            link: 'https://github.com/Solex202/passwordMangementSysytem'
        },
        {
            id: 4,
            link: 'https://github.com/Solex202/Email_service_system-'
        },
        {
            id: 5,
            link: 'https://github.com/Solex202/DiaryAppWithSecurity'
        },
        {
            id: 6,
            link: 'https://github.com/Solex202/Url_Shrtner_with_nodeJs'
        },
    ]
return (
    <div 
    name='portfolio'
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
        
        
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                {
        portfolios.map(({id, src, link}) =>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img 
                    src={src}
                    alt=''
                    className='rounded-md duration-200 hover:scale-105'/>
                    
                    <div className='flex items-center justify-center'>
                    
                        <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href={link}> Code</a>
                        <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</p>
                    </div>
                </div> 
        ))
        }
            </div>
        </div>
    </div>
  )
}

export default Portfolio