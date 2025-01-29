import React, { useState } from 'react'
import rochDev from '../assets/images/roch-dev.png';
import Button from './Button';
import Navbar from './Navbar';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    // function modifyNavState(){
    //     setNavOpen((prev)=>!prev);
    // }

    return (
        <header className='fixed top-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-primary to-primary-900/0 '>
            <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr, 3fr, 1fr]'>

                <h1>
                    <a href="">
                        <img src={rochDev} alt="" width={68} height={24} />
                    </a>
                </h1>

                <div>
                    <button className='menu-btn md:hidden' onClick={() => setNavOpen((prev) => !prev)}>
                        {navOpen ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                            :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                        }
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>

                <a href="#contact" className='bg-white text-primary p-2 hover:bg-zinc-50/10 hover:text-white transition duration-200 rounded-xl max-md:hidden md:justify-self-end'>
                    Contact Me
                </a>

            </div>

            {/* <div className='rounded-3xl p-2 w-24 h-13'>
                <a href="#">
                    <img src={rochDev} alt="" />
                </a>

            </div>
            <div className='flex justify-center max-lg:flex-col'>

                <button onClick={null} className='menu-btn hidden max-lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>
                </button>

                <ul className='flex flex-row gap-4 justify-center items-center max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:bg-zinc-50/10 max-lg:rounded-xl max-lg:p-2'>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Skills</li></a>
                    <a href=""><li>Resume</li></a>
                    <a href=""><li>Projects</li></a>
                    <a href=""><li>Blog</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
            </div>
            <div>
                <Button label="Contact Me"></Button>
            </div> */}
        </header>
    )
}

export default Header
