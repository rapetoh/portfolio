import React from 'react'

const ToolsCard = () => {

    const skillItem = [
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
            label: 'HTML',
            desc: 'Web Conception'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            label: 'Tailwind CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg',
            label: 'Bootstrap',
            desc: 'User Interface'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
            label: 'Figma',
            desc: 'User Interface'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            label: 'NodeJS',
            desc: 'Web Server'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            label: 'ReactJS',
            desc: 'Front-End Framework'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
            label: 'ExpressJS',
            desc: 'Node Framework'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
            label: 'SQL',
            desc: 'Database'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
            label: 'Java',
            desc: 'Programming'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
            label: 'Python',
            desc: 'Programming'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg',
            label: 'Flask',
            desc: 'APIs'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            label: 'PHP',
            desc: 'Server Side language'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
            label: 'Laravel',
            desc: 'Web Framework'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
            label: 'Flutter',
            desc: 'Mobile Development'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
            label: 'Dart',
            desc: 'Mobile Devolpment'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
            label: 'Angular',
            desc: 'Web Framework'
        },
        {
            imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            label: 'Git',
            desc: 'Versioning Control'
        },
        {
            imgSrc: 'https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000',
            label: 'PowerBi',
            desc: 'Data Analysis'
        },
  
    ];

    return (
        <div className='flex flex-row gap-5 flex-wrap justify-center items-center'>
            {
                skillItem.map((item, key) => (
                    <div className='w-1/6 max-lg:w-4/5 border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-300 flex flex-row gap-2'>
                        <div className='rounded-xl w-10 p-2 bg-zinc-600 max-lg:h-10'><img className='w-9' src={item.imgSrc} /></div>
                        <div><span className='text-zinc-200 font-montserrat font-semibold'>{item.label}</span><h6 className='text-[10px] text-zinc-200'>{item.desc}</h6></div>
                    </div>
                ))
            }
        </div>
            
    )
}

export default ToolsCard
