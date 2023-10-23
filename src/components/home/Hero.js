import React from 'react';
import {Link} from 'react-router-dom';
import Typed from 'react-typed';

const Hero = ({ scrollToUsers }) => {
  const handleJoinUsClick = () => {
    scrollToUsers.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="text-white">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-2xl font-bold p-2'>
          GROW YOUR CAREER AND FIND NEW PATHS WITH
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold gradient-text bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] md:py-6'>
          JOBBoard.
        </h1>
        <div>
          <p className='md:text-xl sm:text-4xl lg:text-4xl font-bold py-4'>
            Fast, reliable platform to find jobs in
          </p>
          <Typed className='md:text-2xl sm:text-4xl lg:text-4xl font-bold py-4'
          strings = {['Finance', 'Computer science','Marketing', 'Geology', 'Health care', 'Education']} typeSpeed = {120} backSpeed={140} loop/>

        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Join us today and get acess to all our offers.</p>
        <button className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] w-[200px] rounded-full shadow-xl font-medium my-6 mx-auto py-3 text-black hover:from-[#fbc2eb] hover:to-[#fbc2eb]' onClick={handleJoinUsClick}>Join Us</button>
        

        </div>
    </div>
  )
}

export default Hero
