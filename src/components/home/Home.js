import React, { useRef } from 'react'
import Users from './Users'
import Hero from './Hero'


const Home = () => {
  const usersRef = useRef(null);

  return (
    <div>
      <Hero scrollToUsers={usersRef}/>
      <Users ref={usersRef}/>
    </div>
  )
}

export default Home
