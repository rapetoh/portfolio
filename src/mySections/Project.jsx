import React from 'react'
import idtogo from '../assets/images/ID TOGO image.png'
import nikeClone from '../assets/images/Niky website image.png'
import portfolio2O24 from '../assets/images/portfolio 2024 image.png'
import stageL2 from '../assets/images/Stage L2 project.png'
import ProjectCardsComp from '../myComponents/ProjectCardsComp'

const Project = () => {



  return (
    <div id='project' className='max-lg:h-auto bg-gradient-to-tr from-zinc-900 to-zinc-800 p-12 border-zinc-400 rounded-3xl my-2 mx-24 max-lg:mx-10 flex flex-col gap-7'>
      <div className='flex flex-row'><h1 className='text-start text-3xl text-zinc-300 font-palanquin'>My latest Projects</h1></div>
      <ProjectCardsComp></ProjectCardsComp>
    </div>
  )
}

export default Project;
