import React, { useState, useEffect } from 'react'
import Single from '../../assets/single.png'

const Card = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('http://localhost/data/profilCompanie.php')
        .then(response => response.json())
        .then(data => {
            if (data && data.user_profile) {
                setUser(data.user_profile);
            } else if (data && data.error) {
                console.error(data.error);
            }
        })
        .catch(error => {
            console.error('Error fetching user profile:', error);
        });
}, []);

  return (
    <div className='w-full flex items-center justify-center lg:w-1/2 my-10'>
    {user ? (
     <div 
     className='bg-white px-10 rounded-3xl border-gray-200 w-full mx-20'>
     <img className='w-40 h-40 mx-auto bg-center bg-cover mt-5 bg-white border border-4 border-black rounded-full' src={Single} alt='/' />
       <h1 className='text-3xl font-semibold text-center pt-5'>{user.user_name}</h1>
       <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Company description</p>
              
     </div>
    ) : (
      <div 
      className='bg-white px-10 rounded-3xl border-gray-200 w-full mx-20'>
      <img className='w-40 h-40 mx-auto bg-center bg-cover mt-5 bg-white border border-4 border-black rounded-full' src={Single} alt='/' />
        <h1 className='text-3xl font-semibold text-center pt-5'>Company Name</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center pb-4'>Company description</p>
               
      </div>    )}
     </div>
      
  )
    }

export default Card
