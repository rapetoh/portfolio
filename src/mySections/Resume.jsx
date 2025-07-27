import React, { useEffect, useState } from 'react'
import iai from '../assets/images/iai.png'

const Resume = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleWindow() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(
    () => {
      window.addEventListener("resize", handleWindow);
      // Cleanup on component unmount
      return () => window.removeEventListener("resize", handleWindow);
    }
    ,
    []
  )

  return (
    <div id='resume' className='h-auto rounded-3xl pt-6 mx-32 max-lg:mx-12'>

      {
        windowWidth > 768 ?

          <div className='grid grid-cols-2 grid-rows-2 grid-rows-[75px_auto_auto_auto_auto_auto]'>

            <div className='col-start-1 row-start-1 h-1 m-0 p-0'>
              <h2 className='text-3xl font-bold text-center'>Education</h2>
            </div>

            <div className='col-start-2 row-start-1 h-1 m-0 p-0'>
              <h2 className='text-3xl font-bold text-center'>Work Experience</h2>
            </div>









            <div className='col-start-1 row-start-2 flex justify-end'>
              <div className=' size-4 rounded-full bg-[#57c6e5] my-[70px] mx-[-7px]'> </div>
            </div>

            <div className=' col-start-1 row-start-2 border-r-2 border-[#57c6e5] m-[-1px] pr-7' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className='border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>

                <h2 className='text-[#57c6e5] text-md font-bold font-palanquin'>Second Bachelor Degree</h2>
                <p className='text-zinc-300 text-md font-semibold font-palanquin'>Major: Computer science</p>
                <p className='text-zinc-300 font-bold font-palanquin'>2025 - 2026</p>
                <p className='text-zinc-400'>University of Maryland Global Campus | USA, ML</p><br />

                <p className='text-zinc-400'>- Building on my first Bachelor's in Software Engineering and industry experience, I’m pursuing a second Bachelor's in Computer Science at UMGC,</p>
                <p className='text-zinc-400'>- Dedicate 40+ hours/week to mastering cloud computing, networking, and software engineering principles aligned with U.S. industry standards,</p>
                <p className='text-zinc-400'>- Completed 150+ hours of hands-on labs and projects, maintaining an A grade and improving app performance and deployment reliability in personal builds.</p>

              </div>
            </div>













            <div className='col-start-1 row-start-3 flex justify-end'>
              <div className=' size-4 rounded-full bg-[#57c6e5] my-[70px] mx-[-7px]'> </div>
            </div>

            <div className=' col-start-2 row-start-3 border-l-2 border-[#57c6e5] m-[-1px] pl-7 pb-6' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className=' border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>
                <h2 className='text-md text-[#57c6e5] font-bold font-palanquin'>Independant Software Engineer</h2>
                <p className='text-zinc-300'>Aug 2024 - Present</p>
                <p className='text-zinc-400'>- Built and deployed full-stack features using Java, MERN Stack, and Spring Boot, reducing code redundancy by 30% through reusable API and component design.</p>
                <p className='text-zinc-400'>- Designed and executed 4+ self-managed development sprints using Git and Trello, achieving 100% task completion each cycle.</p>
                <p className='text-zinc-400'>- Received positive 4/5 global feedback from peers and local users who tested or used early versions of applications.</p>

                <div className='flex flex-row flex-wrap gap-2'>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                  </div>
                </div>
                {/* <button className='rounded-3xl my-2 py-2 px-3 bg-zinc-600 hover:bg-zinc-400 transform duration-200 font-bold font-palanquin text-sm'>
                  <a href='https://github.com/rapetoh/Biometric-Identification-Solution'>Project details</a>
                </button> */}
              </div>
            </div>











            <div className='col-start-1 row-start-4 flex justify-end'>
              <div className=' size-4 rounded-full bg-[#57c6e5] my-[70px] mx-[-7px]'> </div>
            </div>

            <div className=' col-start-2 row-start-4 border-l-2 border-[#57c6e5] m-[-1px] pl-7' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className=' border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>
                <h2 className='text-md text-[#57c6e5] font-bold font-palanquin'>Full-Stack Software Developer</h2>
                <p className='text-zinc-300'>Suisco - ITPlex Consult | Aug 2023 - Aug 2024</p>


                <p className='text-zinc-400'>- Led development of biometric identification system, verifying identities with 98% accuracy in internal tests.</p>
                <p className='text-zinc-400'>- Coded backend with Python, PHP, and SQL, and integrated with fingerprint hardware, reducing identification fraud attempts by 75%.</p>
                <p className='text-zinc-400'>- Deployed the solution in a fintech environment, meeting 90% of project KPIs and reducing onboarding time by 50%.</p>
                <p className='text-zinc-400'>- Improved user identity lifecycle with new logic, boosting security and onboarding efficiency by 70%.</p>


                <div className='flex flex-row flex-wrap gap-2'>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                  </div>
                </div>
                <button className='rounded-3xl my-2 py-2 px-3 bg-zinc-600 hover:bg-zinc-400 transform duration-200 font-bold font-palanquin text-sm'>
                  <a href='https://github.com/rapetoh/Biometric-Identification-Solution'>Project details</a>
                </button>
              </div>
            </div>











            <div className='col-start-1 row-start-5 border-r-2 border-[#57c6e5] pr-7' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className='border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>

                <h2 className='text-[#57c6e5] text-md font-bold font-palanquin'>Bachelor of Science in Computer Science</h2>
                <p className='text-zinc-300 text-md font-semibold font-palanquin'>Major: Software Engineering and Information Systems</p>
                <p className='text-zinc-300 font-bold font-palanquin'>2020 - 2024</p>
                <p className='text-zinc-400'>IAI-TOGO | Lomé-Togo</p> <br/>

                <p className='text-zinc-400'> - Completed a comprehensive program focused on software engineering, information systems, and programming analysis.</p>
                <p className='text-zinc-400'>- Valedictorian of the Class of 2024,</p>
                <p className='text-zinc-400'>- Certified by WES (World Education Services) with an equivalent GPA: 3.82/4.0</p>

              </div>
            </div>

            <div className='col-start-2 row-start-5 bg-primary flex justify-start'>
              <div className=' size-4 rounded-full bg-white my-[70px] mx-[-8px] z-10'> </div>
            </div>











            <div className='col-start-2 row-start-6 border-l-2 border-[#57c6e5] m-[-1px] pl-7' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className='border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>
                <h2 className='text-md text-[#57c6e5] font-bold font-palanquin'>Flutter Mobile & Desktop Developer | Intern</h2>
                <p className='text-zinc-300'>SIB Sarl | June 2023 - Aug 2023</p>
                <p className='text-zinc-400'>• Developed a Flutter application, working on Windows desktop & mobile devices, that integrated QR code-based check-ins, reducing visitor registration time by 50%.</p>
                <p className='text-zinc-400'>• Enhanced parking management accuracy by 90% through real-time slot tracking features. </p>
                <p className='text-zinc-400'>• Implemented secure visitor logging, decreasing manual errors by over 70%.  </p>
                <p className='text-zinc-400'>• Achieved a rating of 4.5/5 from a jury during a 3-month internship at SIB SARL. </p>


                <div className='flex flex-row gap-2'>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-start-1 row-start-6 flex justify-end'>
              <div className=' size-4 rounded-full bg-[#57c6e5] left-100 my-[70px] mx-[-7px]'> </div>
            </div>


          </div>

          :


          <div className='flex flex-col gap-9'>




            <div className=''>
              <h2 className='text-3xl font-bold text-center'>Work Experience</h2>
            </div>


            <div className='' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className=' border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>
                <h2 className='text-md text-[#57c6e5] font-bold font-palanquin'>Independant Software Engineer</h2>
                <p className='text-zinc-300'>Aug 2024 - Present</p>
                <p className='text-zinc-400'>- Built and deployed full-stack features using Java, MERN Stack, and Spring Boot, reducing code redundancy by 30% through reusable API and component design.</p>
                <p className='text-zinc-400'>- Designed and executed 4+ self-managed development sprints using Git and Trello, achieving 100% task completion each cycle.</p>
                <p className='text-zinc-400'>- Received positive 4/5 global feedback from peers and local users who tested or used early versions of applications.</p>

                <div className='flex flex-row flex-wrap gap-2'>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                  </div>
                </div>
                {/* <button className='rounded-3xl my-2 py-2 px-3 bg-zinc-600 hover:bg-zinc-400 transform duration-200 font-bold font-palanquin text-sm'>
                  <a href='https://github.com/rapetoh/Biometric-Identification-Solution'>Project details</a>
                </button> */}
              </div>
            </div>

            <div className='' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className=' border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>
                <h2 className='text-md text-[#57c6e5] font-bold font-palanquin'>Full-Stack Software Developer</h2>
                <p className='text-zinc-300'>Suisco - ITPlex Consult | Aug 2023 - Aug 2024</p>
                <p className='text-zinc-400'>- Led development of biometric identification system, verifying identities with 98% accuracy in internal tests.</p>
                <p className='text-zinc-400'>- Coded backend with Python, PHP, and SQL, and integrated with fingerprint hardware, reducing identification fraud attempts by 75%.</p>
                <p className='text-zinc-400'>- Deployed the solution in a fintech environment, meeting 90% of project KPIs and reducing onboarding time by 50%.</p>
                <p className='text-zinc-400'>- Improved user identity lifecycle with new logic, boosting security and onboarding efficiency by 70%.</p>
                <div className='flex flex-row flex-wrap gap-2'>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                  </div>
                </div>
                <button className='rounded-3xl my-2 py-2 px-3 bg-zinc-600 hover:bg-zinc-400 transform duration-200 font-bold font-palanquin text-sm'>
                  <a href='https://github.com/rapetoh/Biometric-Identification-Solution'>Project details</a>
                </button>
              </div>
            </div>



            <div className='' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className='border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>
                <h2 className='text-md text-[#57c6e5] font-bold font-palanquin'>Flutter Mobile & Desktop Developer | Intern</h2>
                <p className='text-zinc-300'>SIB Sarl | June 2023 - Aug 2023</p>
                <p className='text-zinc-400'>• Developed a Flutter application, working on Windows desktop & mobile devices, that integrated QR code-based check-ins, reducing visitor registration time by 50%.</p>
                <p className='text-zinc-400'>• Enhanced parking management accuracy by 90% through real-time slot tracking features. </p>
                <p className='text-zinc-400'>• Implemented secure visitor logging, decreasing manual errors by over 70%.  </p>
                <p className='text-zinc-400'>• Achieved a rating of 4.5/5 from a jury during a 3-month internship at SIB SARL. </p>


                <div className='flex flex-row gap-2'>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" />
                  </div>
                  <div className='rounded-xl w-8 p-1 m-1 bg-zinc-400 max-lg:h-10'>
                    <img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                  </div>
                </div>
              </div>
            </div>


            <div className=''>
              <h2 className='text-3xl font-bold text-center'>Education</h2>
            </div>


            <div className='' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className='border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>

                <h2 className='text-[#57c6e5] text-md font-bold font-palanquin'>Second Bachelor Degree</h2>
                <p className='text-zinc-300 text-md font-semibold font-palanquin'>Major: Computer science</p>
                <p className='text-zinc-300 font-bold font-palanquin'>2025 - 2026</p>
                <p className='text-zinc-400'>University of Maryland Global Campus | USA, ML</p>

              </div>
            </div>
            <div className='' data-aos="fade-up" data-aos-duration="500" data-aos-offset="40">
              <div className='border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-200'>

                <h2 className='text-[#57c6e5] text-md font-bold font-palanquin'>Bachelor of Science in Computer Science</h2>
                <p className='text-zinc-300 text-md font-semibold font-palanquin'>Major: Software Engineering and Information Systems</p>
                <p className='text-zinc-300 font-bold font-palanquin'>2020 - 2024</p>
                <p className='text-zinc-400'>IAI-TOGO | Lomé-Togo</p><br/>

                <p className='text-zinc-400'> - Completed a comprehensive program focused on software engineering, information systems, and programming analysis.</p>
                <p className='text-zinc-400'>- Valedictorian of the Class of 2024,</p>
                <p className='text-zinc-400'>- Certified by WES (World Education Services) with an equivalent GPA: 3.82/4.0</p>


              </div>
            </div>


          </div>
      }

    </div>
  )
}

export default Resume;
