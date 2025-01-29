import React from 'react'
import freeCodeCamp from '../assets/images/freecodecamp.png'

const Certifications = () => {

    const certificates = [
        {
            "link": "https://freecodecamp.org/certification/Senyo_Rapetoh/back-end-development-and-apis",
            "name": "Back-End Development & APIs",
            "organization": "freeCodeCamp",
            "imgURL": freeCodeCamp,
            "date": "2023",
            "topics": ["Back-End Development", "APIs", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            "link": "https://www.credly.com/badges/ec1967ec-67ea-4d82-b27c-34fb080f82db/linked_in_profile",
            "name": "CCNA1-Introduction to Networking",
            "organization": "Cisco",
            "imgURL": "https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
            "date": "2022",
            "topics": ["Networking"]
        },
        {
            "link": "https://www.credly.com/badges/fd64a34a-f672-4a95-a53d-0a0dd6404cb1/linked_in_profile",
            "name": "CCNA2-Routing and Switching Essentials",
            "organization": "Cisco",
            "imgURL": "https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
            "date": "2023",
            "topics": ["Networking"]
        },
        {
            "link": "https://myworkkeys.act.org/mwk/emCertDetails.do?event=go&realm=17740116&certId=8QZW74HN0G11",
            "name": "GOLD Level National Career Readiness Certificate",
            "organization": "ACT WorkKeys",
            "imgURL": "https://images.credly.com/images/0416ae4f-4e65-4612-ab7b-a7c667f02cdc/image.png",
            "date": "2024",
            "topics": ["Problem-Solving", "Analysis skills", "Math", "Workplace"]
        },

    ]


    return (
        <div id='certificates' data-aos="fade-up" data-aos-duration="1500" className='min-h-screen/2 max-lg:h-auto border-zinc-400 rounded-3xl max-lg:mx-10 flex flex-col items-center justify-center gap-7'>

            <h1 className='text-3xl max-md:text-2xl font-md text-center'>Certificates & Distinctions</h1>

            <div className="h-1/3">
                <div className='flex flex-row gap-20 justify-center items-center w-full'>
                    {
                        certificates.map((certificate, index) => {
                            return (
                                <a href={certificate.link} target="_blank" rel="noreferrer" className='hover:scale-105 transform duration-300'>
                                    <div key={index} className='w-56 max-w-64 border-2 rounded-3xl p-5 border-zinc-700 hover:bg-zinc-800 transform duration-300 flex flex-col  gap-2'>
                                        <div className='flex flex-row flex-wrap gap-2'>

                                            {
                                                certificate.topics.map((topic, index) => {
                                                    return (
                                                        <div className='bg-zinc-700 rounded-md p-1 text-[13px] mb-1 text-zinc-300'>
                                                            {topic}
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                        <img className='rounded-3xl w-full h-32' src={certificate.imgURL} alt="" />
                                        <div className='w-3/3'>
                                            <p className='w-full text-wrap text-[15px]'>{certificate.name} ~ <span className='w-full text-wrap text-[12px] italic text-zinc-300'>{certificate.organization}</span></p>

                                            <h3>{certificate.date}</h3>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Certifications
