import React, {useState} from 'react'
import Card from './Card'
import Form from './Form'

const Dashboard = () => {

  return (
    <div className='flex flex-col lg:flex-row w-full min-h-screen bg-[#f1f1f1]'>
    
      <Card />
      <Form />
    </div>
 )
}
  

export default Dashboard
