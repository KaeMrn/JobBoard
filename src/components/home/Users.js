import React, { forwardRef } from 'react'
import Single from '../../assets/single.png'
import Triple from '../../assets/triple.png'
import { Link } from 'react-router-dom';



const Users = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='w-full py-[10rem] px-4 bg-white'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
            <div>
            <h2 className='text-2xl font-bold text-center py-8'>Recruiter</h2>
           <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8'>Free registration</p>
            <p className='py-2 border-b mx-8'>A huge network of job seekers</p>
            <p className='py-2 border-b mx-8'>Unlimited daily posts</p>
            </div></div>
            <Link to="/registrationCo" className="mx-auto">
            <button className="w-[200px] mx-auto bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">
              Sign Up</button>
            </Link>

         </div>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
            <div>
            <h2 className='text-2xl font-bold text-center py-8'>Job Seeker</h2>
           <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8'>Free registration</p>
            <p className='py-2 border-b mx-8'>New job offers daily</p>
            <p className='py-2 border-b mx-8'>Unlimited daily applications</p>
            </div></div>
            <Link to="/registration" className="mx-auto">
            <button className="w-[200px] mx-auto bg-gradient-to-r from-[#a6c1ee] to-[#fbc2eb] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">Sign Up</button>
            </Link>


         </div>
        </div> 
    </div>
  )
})

export default Users
