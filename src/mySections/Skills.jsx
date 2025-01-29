import React from 'react'
import ToolsCard from '../myComponents/ToolsCard';

const Skills = () => {
  return (
    <div className='h-screen max-lg:h-auto rounded-3xl my-32 flex flex-col justify-center items-center'>
      
      <div className='flex flex-col gap-4 mx-32 max-lg:mx-12 p-6 rounded-3xl bg-gradient-to-tr from-zinc-900 to-zinc-800'>
        <div className=''><h1 className='text-3xl text-zinc-200'>My skills</h1></div>
        <div className='mb-2'><h3 className='text-zinc-400 text-lg w-3/5 max-lg:w-full'>Discover the powerful tools and technologies i use to create excpetional, high performing websites & applications</h3></div>
        <ToolsCard></ToolsCard>
      </div>
    </div>
  )
}

export default Skills;
