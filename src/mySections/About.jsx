import React from 'react'
import available from '../assets/images/available.jpeg'
import ToolsCard from '../myComponents/ToolsCard'

const About = () => {
  return (
    <div className='h-screen rounded-3xl flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-4 mx-60 max-lg:mx-16 p-6 rounded-3xl bg-zinc-800'>
        <h1 className='text-zinc-300 font-semibold text-xl tracking-wider font-palanquin max-md:text-sm max-lg:text-md'> <img className='w-10 h-10 rounded-full my-2' src={available} alt="" />
          I am a passionate Software Developer specializing in web and mobile development, database management, data analysis, and problem-solving. I enjoy creating innovative solutions that address real-world challenges.

          I have worked on impactful projects whether front-end, back-end or fullstack like biometric identification systems and data-driven applications. My goal is to continuously learn, grow, and contribute to building meaningful solutions in the tech industry.
          
          Below you will find more details about my skills.


        </h1>
        <div className='flex flex-row gap-6 items-center'>
          <div className='text-3xl text-montserrat'>
            <h1 className='font-bold'>3<span className='text-[#57c6e5] text-2xl'>+</span> <span className='text-zinc-300 font-semibold text-sm align-middle'>years</span></h1>
            <h2 className='text-sm text-right text-zinc-300'>Front-End</h2>
          </div>
          <div className='text-3xl text-montserrat'>
            <h1 className='font-bold'>2<span className='text-[#57c6e5] text-2xl'>+</span> <span className='text-zinc-300 font-semibold text-sm align-middle'>years</span></h1>
            <h2 className='text-sm text-right text-zinc-300'>Back-End</h2>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
