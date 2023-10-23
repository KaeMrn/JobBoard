import React, { useState } from 'react'
import { useAuth } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setIsAuthenticated } = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost/data/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${email}&password=${password}`,
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem('userToken', data.token); 
          setIsAuthenticated(true); 
          setMessage(data.success);
        } else if (data.error) {
            setMessage(data.error);
        }
    };
    
  return (
    <div className='flex w-full min-h-screen bg-[#f1f1f1]'>
    <div className='w-full flex items-center justify-center lg:w-1/2 my-10'>
     <form 
     onSubmit={handleSubmit} 
     className='bg-white px-10 rounded-3xl border-gray-200'>
       <h1 className='text-3xl font-semibold text-center pt-5'>Welcome!</h1>
       <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Please enter your information.</p>
       <div className='mt-8'>
         
         <div>
           <label className='text-md font-medium'>Email</label>
           <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
           placeholder='Enter your email'
           type='email'
           name='email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
         </div>
         
         <div>
           <label className='text-lg font-medium'>Password</label>
           <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
           placeholder='Enter your password'
           type = "password"
           name='password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}/>
         </div>
         
         </div>
         {message && (
        <p className={`mt-4 ${message === 'Connexion réussie' ? 'text-green-500' : 'text-red-500'}`}>
        {message}
        </p>
        )}

       <div className='mx-auto text-center mb-4'>
       <button type="submit" className="w-[200px] bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">Login</button>
      </div>
     </form>
     </div>
     <div className='hidden lg:flex w-1/2 items-center justify-center bg-gray-200'>
       <div className='w-60 h-60 bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] rounded-full'></div>
     </div>
      
    </div>
  )
}

export default Login
