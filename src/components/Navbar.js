import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleLogout = () => {
    logout();
  }
 

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold gradient-text bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]"><Link to="/">JOBBoard.</Link></h1>
      <ul className='hidden md:flex'>
        <li className="p-4"><Link to="/">Home</Link></li>
        <li className="p-4"><Link to="/jobs">Jobs</Link></li>
        <li className="p-4"><Link to={isAuthenticated ? "/dash" : "/login"}>Profile</Link></li>        
        {isAuthenticated ? (
                <Link to="/">
                    <button onClick={handleLogout} className="w-[100px] mx-auto bg-gradient-to-r from-[#a6c1ee] to-[#fbc2eb] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium">Sign out</button>
                </Link>
            ) : (
                <Link to="/login">
                    <button className="w-[100px] mx-auto bg-gradient-to-r from-[#a6c1ee] to-[#fbc2eb] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">Sign in</button>
                </Link>
            )}
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold gradient-text bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] m-4 mt-8"><Link to="/">JOBBoard.</Link></h1>

        <ul className='uppercase p-4'>
        <li className="p-4 border-b border-gray-600"><Link to="/">Home</Link></li>
        <li className="p-4 border-b border-gray-600"><Link to="/jobs">Jobs</Link></li>
        <li className="p-4"><Link to={isAuthenticated ? "/dash" : "/login"}>Profile</Link></li>        
        {isAuthenticated ? (
                <Link to="/">
                    <button onClick={handleLogout} className="w-[100px] mx-auto bg-gradient-to-r from-[#a6c1ee] to-[#fbc2eb] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium">Sign out</button>
                </Link>
            ) : (
                <Link to="/login">
                    <button className="w-[100px] mx-auto bg-gradient-to-r from-[#a6c1ee] to-[#fbc2eb] text-black px-2 py-2 mt-3 rounded-full border  shadow-md hover:shadow-lg hover:from-[#87acec] hover:to-[#87acec] text-sm font-medium ">Sign in</button>
                </Link>
            )}
        
        </ul>
        </ul>
    </div>
  );
};

export default Navbar;