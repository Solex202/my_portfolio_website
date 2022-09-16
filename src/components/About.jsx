import React from 'react'

const About = () => {
  return (
    <div name='about'
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex
        flex-col justify-center w-full h-full'>
            
        
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>Hello, I am Lotachukwu Onwuka, and I am a Software Engineer. I have worked 
            on a wide variety of projects that have allowed me to put what I’ve learnt in School and during my personal 
            development into use in a practical sense. I am part of a tech community that has helped me in improving my 
            skills and given me the opportunity to interact with fellow developers and it is really exciting to see the portfolio grow.</p>
            <br/>
            <p className=' text-xl'>I have good knowledge and understanding of programming languages such as Java, Python,
            Javascript and also a good understanding of Frameworks such as Springboot, Tailwind, React. I am also familiar
            with some Atlassian Tools like Jira and Confluence.I pride myself on being detail-oriented, analytical, and driven. 
            I have the ability to create back-end code that will add utility to everything the front-end designer creates.</p>
            <br/>
            <p className=' text-xl'>I’m passionate about the impact my skills can have in the real world, and firmly believe that 
            I can create innovative solutions to business processes and problems which will ultimately lead to a better user experience.
            My ambition is to reach the very top of my profession and to work with other leading developers in this field. On a personal 
            level I am able to both give and take feedback. Furthermore I am committed to constantly improving myself by learning new technologies and frameworks.</p>

        </div>
    </div>
  )
}

export default About