import React, { useState } from 'react'

const Form = () => {
  const [serverResponse, setServerResponse] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    salary: '',
    location: '',
    phone: '',
    description: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/backend/annonce/create.php', {
      method: 'POST',
      body: new URLSearchParams(formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const responseBody = await response.json();
    console.log(responseBody);
    setServerResponse(responseBody);

    

  }


  return (
      <div className='min-h-screen w-full flex items-center justify-center my-10'>
     <form onSubmit={handleSubmit}
     className='bg-white px-10 rounded-3xl border-gray-200 w-full mx-20'>
       <h1 className='text-3xl font-semibold text-center pt-5'>Post a Job</h1>
       <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Please enter all the necessary information.</p>
       <div className='mt-8'>
         <div>
           <label className='text-md font-medium'>Title</label>
           <input 
           type='text'
           name="title"
           value={formData.title}
           onChange={handleChange}
           className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
           placeholder='Enter a title'/>
         </div>
         <div>
           <label className='text-md font-medium'>Salary</label>
           <input 
           name="salary"
           value={formData.salary}
           onChange={handleChange}
           className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
           placeholder='Enter your salary'
           type='number'/>
         </div>
         <div>
           <label className='text-md font-medium'>Location</label>
           <input 
           name="location"
           value={formData.location}
           onChange={handleChange}
           className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
           placeholder='Enter your location'
           type='text'/>
         </div>
         <div>
           <label className='text-lg font-medium'>Insert your image URL</label>
           <input 
           name="URL"
           value={formData.URL}
           onChange={handleChange}
           className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
           placeholder='Enter your image URL'
           type = "text"/>
         </div>
         <div>
           <label className='text-lg font-medium'>Description</label>
           <textarea 
           name="description"
           value={formData.description}
           onChange={handleChange}
           placeholder="Tell us more about the job" className="border p-2 rounded w-full h-40 mb-3"></textarea>

         </div>
         
         
       </div>
       <div className='mx-auto text-center mb-4'>
       <button type="submit" className="w-[200px] bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">Submit Offer</button>
      </div>
      {serverResponse && serverResponse.success && (
         <div className="text-green-500 mt-2 mb-2 text-center">
        {serverResponse.success}
    </div>
)}
     </form>
     </div>
  )
}

export default Form
