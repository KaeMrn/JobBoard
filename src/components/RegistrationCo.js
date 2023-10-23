import React, { useState } from 'react'


const RegistrationCo = () => {
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
        const response = await fetch("http://localhost/data/registerC.php", {
            method: 'POST',
            body: formData,
        });

        const responseData = await response.json();
        console.log(responseData);
        setServerResponse(responseData);
        
        
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};


  return (
    <div className='flex w-full min-h-screen bg-[#f1f1f1]'>
     <div className='w-full flex items-center justify-center lg:w-1/2 my-10'>
      <form onSubmit={handleSubmit}

      className='bg-white px-10 rounded-3xl border-gray-200'>
        <h1 className='text-3xl font-semibold text-center pt-5'>Welcome!</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Please enter your information.</p>
        <div className='mt-8'>
        {serverResponse && serverResponse.error && serverResponse.error.message && (
        <div className="text-red-500 mt-2 mb-2 text-center">
        {serverResponse.error.required}
        </div>
        )}
          <div>
            <label className='text-md font-medium'>Company Name</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your company name'
            type='text'
            name='name'/>
          </div>
          <div>
            <label className='text-md font-medium'>Industry</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your field of activity'
            type='text'
            name='industry'/>
          </div>
          <div>
            <label className='text-md font-medium'>Email</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your email'
            type='email'
            name='contact_email'/>    
            {serverResponse && serverResponse.error && serverResponse.error.email && (
            <div className="text-red-500 mt-1">
            {serverResponse.error.email}
        </div>
         )}
          </div>
          <div>
            <label className='text-md font-medium'>Location</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your location'
            type='text'
            name='location'/>
          </div>
          <div>
            <label className='text-lg font-medium'>Password</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your password'
            type = "password"
            name ='password'/>
          </div>
          <div>
            <input className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Retype your password'
            type='password'/>
          </div>
          <div className='p-4 mx-auto text-center'>
            <input type='checkbox'/>
            <label className=''> Agree on terms and conditions.</label>
            {serverResponse && serverResponse.success && (
         <div className="text-green-500 mt-2 mb-2 text-center">
        {serverResponse.success}
    </div>
)}
          </div>
        </div>
        <div className='mx-auto text-center mb-4'>
        <button type="submit" name="submit" className="w-[200px] bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">Submit Application</button>
       </div>
      </form>
      </div>
      <div className='hidden lg:flex w-1/2 items-center justify-center bg-gray-200'>
        <div className='w-60 h-60 bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] rounded-full'></div>
      </div>
    </div>
  )
}

export default RegistrationCo
