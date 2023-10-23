import React, { useState, useEffect  } from 'react';

export default function JobCards() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyForJob, setApplyForJob] = useState(null);
  const [file, setFile] = useState(null);
  const [jobListings, setJobListings] = useState([]);
  
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentJobListings = jobListings.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetch('http://localhost/backend/annonce/readADS.php')
      .then(response => response.json())
      .then(data => {
        setJobListings(data);
      })
      .catch(error => {
        console.error('Error fetching the job listings:', error);
      });
  }, []);

  const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(jobListings.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }



  
  return (
      <div className="w-full py-[4rem] bg-white">
      <h1 className='md:text-xl sm:text-4xl lg:text-4xl font-bold text-black text-center pt-2 pb-10'>
          Find the right job for you:
        </h1>
      <ul className="jobList py-4 flex flex-col justify-center items-center">
        {currentJobListings.map(job => (
          <li className="job bg-white border border-gray-300 m-5 p-7 w-full sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-lg shadow-xl hover:scale-105 duration-300" 
          key={job.id}>
            <img className='float-right w-full h-auto max-w-[200px] py-3'
          src={job.URL}
          />
            <h2 className='font-bold text-xl lg:text-2xl pt-5'>{job.title}</h2>
            <div className='text-gray-500 font-small'>Company name</div>
            <p className='truncate w-full'>{job.description}</p>
            <div className='flex gap-5 mt-2'>
            <button className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium "
            onClick={() => setSelectedJob(selectedJob === job.id ? null: job.id)}>Learn More</button>
            <button className="bg-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full hover:bg-[#87acec] text-sm font-medium shadow-md"
            onClick={() => setApplyForJob(applyForJob === job.id ? null : job.id)}>Apply</button>
            </div>
                  
            {selectedJob === job.id && (
              <div className="job-details pt-4">
                <p><strong>Full Description:</strong> {job.description}</p>
                <p className='pt-4'><strong>Wages:</strong> {job.salary}$</p>
                <p className='pt-4'><strong>Location:</strong> {job.location}</p>
                <p className='pt-4'><strong>Posted at:</strong> {job.created_at}</p>
              </div>
            )}
            {applyForJob === job.id && (
             <div className="apply-form mt-3">
              <form>
            <input type="text" placeholder="Name" className="border p-2 rounded w-full mb-3"/>
            <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-3"/>
            <p>Attach your CV or relevant documents:</p>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-2 rounded w-full mb-3"/>
            <textarea placeholder="Why do you want this job?" className="border p-2 rounded w-full mb-3"></textarea>
            <button type="submit" className="bg-[#a6c1ee] text-black px-2 py-2 mt-3 rounded-full hover:bg-[#87acec] text-sm font-medium shadow-md">Submit Application</button>
            </form>
            </div>
             )}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="pagination-controls flex justify-center space-x-4 mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    Previous
                </button>
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => setCurrentPage(number)}
                        className={`px-4 py-2 ${currentPage === number ? 'bg-[#a6c1ee] text-white' : 'bg-gray-300'} rounded-md`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    disabled={currentPage === Math.ceil(jobListings.length / itemsPerPage)}
                    onClick={() => setCurrentPage(prevPage => prevPage + 1)}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    Next
                </button>
            </div>
    </div>
  )
}

