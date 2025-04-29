import React from 'react'
import idtogo from '../assets/images/ID TOGO image.png'
import nikeClone from '../assets/images/Niky website image.png'
import portfolio2O24 from '../assets/images/portfolio 2024 image.png'
import stageL2 from '../assets/images/Stage L2 project.png'
import calculator from '../assets/images/calculator.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import portfolio2025 from '../assets/images/portfolio2025.png'
import DA_portfolio2025 from '../assets/images/data_analyst portfolio.png'


const ProjectCardsComp = () => {


    const privateProject = () => {
        toast.warn("This project is private, you can not access at this time the source code or a live demo !");
    };

    const projects = [
        {
            imgURL: idtogo,
            projectName: 'Biometric & Identification Solution',
            projectDescription: [
                'Implemented a Biometric and Identification Solution ',
                'Built the Fingerprint Management and Facial recognition system using Python',
                'Connected  the Laravel application with the Python API using WebSocket',
                'Performed MySQL Database Management and set up Google Drive API for cloud storage'
            ],
            projectLink: 'https://github.com/rapetoh/Biometric-Identification-Solution',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'
            ],
            type: [
                'Frontend',
                'Backend',
                'APIs'
            ]
        },
        {
            imgURL: nikeClone,
            projectName: 'Nike Clone',
            projectDescription: [
                'Built a fully responsive Nike-themed website, ensuring compatibility across all devices and screen sizes',
                'Leveraged Tailwind CSS utility-first classes for fast front-end development.',
                'Utilized React components to create a modular and reusable codebase for the website',

            ],
            projectLink: 'https://roch-dev.me/Tailwind-X-Nike/',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            ],
            type: [
                'Frontend',
            ]
        },
        {
            imgURL: portfolio2O24,
            projectName: 'Portfolio',
            projectDescription: [
                'Created a responsive and visually appealing portfolio using HTML, CSS, and JavaScript',
                'Implemented smooth animations to enhance user engagement.',
                'Focused on simplicity and lightweight design to ensure fast loading times',

            ],
            projectLink: 'https://roch-dev.me/portfolio-2024/',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            ],
            type: [
                'Frontend'
            ]
        },
        {
            imgURL: calculator,
            projectName: 'React Calculator App',
            projectDescription: [
                'Developed a simple calculator app using React',
                'Implemented basic arithmetic operations and a user-friendly interface',
                'Focused on simplicity and lightweight design to ensure fast loading times',
                'Utilized React components to create a modular and reusable codebase for the app',

            ],
            projectLink: 'https://github.com/rapetoh/Calculator-App-with-React',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',

            ],
            type: [
                'Frontend',
                'Algorithms',
            ]
        },
        {
            imgURL: portfolio2025,
            projectName: 'Designed Personnal Portfolio',
            projectDescription: [
                'Created a new version of my portfolio leveraging React and Tailwind CSS',
                'Focused on user experience and simplicity to keep it lightweight',
                'Levaraged the power of React and Javascript to create a dynamic effects and animations',
            ],
            projectLink: '#',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            ],
            type: [
                'Frontend',
            ]
        },
        {
            imgURL: DA_portfolio2025,
            projectName: 'Data Analyst Profile',
            projectDescription: [
                'Microsoft Certified Data Analyst Portfolio showcasing my skills and projects',
                'Focused on user experience and simplicity to keep it lightweight',
                'Levaraged the power of HTML, CSS and Javascript to create a dynamic effects and animations',
            ],
            projectLink: 'https://roch-dev.me/data_analysis/',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                'https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000',

            ],
            type: [
                'BI & Data Analysis','Power BI'
            ]
        },

        {
            imgURL: stageL2,
            projectName: 'Visits & Parking Management System',
            projectDescription: [
                'Worked on Vehicle Parking and Visitor Management System',
                'Developp a Mobile app for users and Desktop App for administration both using Flutter',
                'Used TCP/IP concepts to connect locally all the devices in a unique and securised network',
                'Performed Database Management with Mysql'
            ],
            projectLink: '#project',
            projectRepo: '',
            technologyImg: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'
            ],
            type: [
                'Frontend',
                'Backend',
            ]
        },

    ]


    return (
        <div className='flex flex-row flex-wrap items-center gap-4 justify-center'>
            {
                projects.map((project, index) => {
                    return (
                        <div className='w-1/3 max-lg:w-full min-h-[540px] border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-300 flex flex-col gap-2' data-aos="fade-up" data-aos-duration="1500">
                            <div className='flex flex-row gap-1'>
                                {
                                    project.type.map((value, index) => {
                                        return <div key={index} className='bg-zinc-700 rounded-md p-1 text-sm mb-1 text-zinc-300'>{value}</div>
                                    })
                                }
                            </div>
                            <img className='rounded-xl w-46 h-45' src={project.imgURL} alt="" />
                            <div className='flex flex-row gap-5 max-xl:flex-col justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-md text-zinc-300 font-palanquin font-medium'>{project.projectName}</h1>
                                    <ul className='list-disc list-inside'>
                                        {
                                            project.projectDescription.map((description, key) => {
                                                return <li key={key} className='text-sm text-zinc-400'>
                                                    {description}
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <div className='flex flex-row gap-1 items-center'>
                                        {
                                            project.technologyImg.map((tech, index) => {
                                                return (
                                                    <div className='rounded-lg w-8 p-1 m-1 bg-zinc-600 max-lg:h-10'>
                                                        <img className='w-6' src={tech} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <a href={project.projectLink} className='lg:flex lg:flex-col lg:justify-end'>
                                    {
                                        project.projectName != 'Visits & Parking Management System'
                                            ?
                                            <button className='rounded-xl my-2 py-2 px-3 bg-[#57c6e5] hover:bg-zinc-400 transform duration-200 font-bold font-palanquin text-sm'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                    <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
                                                </svg>

                                            </button>
                                            :
                                            <button onClick={privateProject} className='rounded-xl my-2 py-2 px-3 bg-red hover:bg-zinc-400 transform duration-200 font-bold font-palanquin text-sm'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                    <path fill-rule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clip-rule="evenodd" />
                                                </svg>


                                            </button>
                                    }
                                </a>
                            </div>
                        </div>
                    )
                })

            }

        </div>
    )

}

export default ProjectCardsComp;
