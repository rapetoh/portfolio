import React from 'react'
import { trackOutboundLink } from '../analytics.js';
const Contact = () => {

  const socialLinks = [
    {
      href: 'https://github.com/rapetoh',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
      </svg>,
      alt: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/rochapetoh/',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
      </svg>,
      alt: 'LinkedIn'
    },

  ];

  return (
    <div className='h-screen/2 my-2 mx-52 max-lg:mx-10 flex flex-row max-lg:flex-col justify-between items-center'>
      <div className='flex flex-col justify-between' data-aos="fade-up" data-aos-duration="1500">
        <div>
          <h1 className='text-4xl font-semibold font-palanquin text-zinc-300 w-1/2 mb-4'>Contact for collaboration</h1>
          <h6 className='text-md font-palanquin text-zinc-500 w-1/2 mb-14'>Reach out today to discuss your project needs and start collaborating on something amazing</h6>
        </div>
        <div className='flex flex-row gap-4'>
          {
            socialLinks.map((link, index) => {
              return (
                <a href={link.href} key={index} className='bg-zinc-700 p-2 rounded-xl hover:bg-zinc-600/10 transition duration-200'
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink(link.href)}

                >
                  {link.icon}
                </a>
              )
            })

          }
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <form action="https://getform.io/f/bxookxma" method="post" className='flex flex-col gap-4 w-3/3 max-lg:w-full max-lg:mt-10'>
          <div className='flex flex-row gap-4'>
            <div>
              <label className='text-md font-palanquin text-zinc-200 ' for="name">Name :</label>
              <input type="text" id="name" placeholder='John Doe' name="name" className='w-full p-2 mt-3 rounded-xl bg-zinc-800 text-zinc-300' />
            </div>
            <div>
              <label className='text-md font-palanquin text-zinc-200 ' for="mail">Email :</label>
              <input type="text" id="mail" name="mail" placeholder='johndoe@gmail.com' className='w-full p-2 mt-3 rounded-xl bg-zinc-800 text-zinc-300' required />
            </div>
          </div>
          <div>
            <label className='text-md font-palanquin text-zinc-200 ' for="message">Message :</label>
            <textarea id="message" name="message" placeholder='Type your message' className='w-full p-2 mt-3 rounded-xl bg-zinc-800 text-zinc-300' required />
          </div>
          <button type="submit" className='w-3/3 p-2 bg-[#57c6e5] rounded-xl hover:bg-zinc-400 transition duration-200 text-primary font-medium'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
