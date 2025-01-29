import React from 'react'
import rochProfile from '../assets/images/favicon.png'
import available from '../assets/images/available.jpeg'

const Home = () => {
  return (
    <div id='home' className='h-screen pt-20 flex flex-row max-md:flex-col max-md:px-1 justify-center items-center px-40 max-lg:px-32'>

      <div className='flex flex-col gap-2 w-2/5'>
        <marquee className="w-4/5 text-zinc-500 max-md:w-full" behavior="" scrollamount="5" direction="left">Full-Stack Software Development - Database Management - Data Analysis </marquee>
        <div className='flex flex-row gap items-center gap-1 max-lg:text-sm'>
          <img className='w-8 h-8 rounded-md max-lg:w-5 max-lg:h-5' src={available} alt="" />&nbsp; <div className='rounded-full w-2 h-2 bg-green-500'></div>  &nbsp; Available to work
        </div>
        <div className='text-4xl font-bold text-white max-md:text-center max-md:text-2xl max-md:w-full w-4/5'>
          Hi, I'm Roch. <br /> A Full-Stack Software Developer <br /> & <br />Data Analyst
        </div>
        <div className='flex flex-row gap-2 max-md:flex-col max-md:gap-1'>
          <button onClick={null} className='flex flex-row justify-center items-center gap-3 my-3 p-3 bg-[#57c6e5] rounded-xl hover:bg-white transform duration-200'>
            <span className='text-primary font-bold'>Download CV </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="primary" class="size-4">
              <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
          </button>
          <a href="#contact">
            <button onClick={null} className='flex flex-row justify-center items-center gap-3 my-3 p-3 bg-zinc-600 rounded-xl hover:bg-zinc-400 transform duration-200'>
              <span className='text-white font-bold'>Scroll Down</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-4" >
                <path fill-rule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" />
              </svg>

            </button>
          </a>
        </div>
      </div>


      <div className='rounded-3xl p-0 mb-4 bg-gradient-to-t from-[#57c6e5] via-[#57c6e5]/10 to-[#40E0D0]/0 w-2/5 max-lg:w-4/5'>
        <img className='' src={rochProfile} alt="" />
      </div>
    </div>
  )
}

export default Home;
