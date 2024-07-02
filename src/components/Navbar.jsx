import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Login', href: '/login' },
    { id: 2, text: 'Register', href: '/register' },
  ];

  return (
    <div className='bg-white w-full flex justify-between items-center py-3 px-8'>

      <Link to={'/'} className='text-2xl font-bold'>MovieReviews</Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-4 items-center'>
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.href}
            className='text-base cursor-pointer px-3 py-2 rounded-md hover:bg-black hover:text-white transition-all'
          >
            {item.text}
          </Link>
        ))}
        <div className='ml-4'>
          <input type='text' placeholder='Search movie...' className='border border-[#1f1f1f] outline-none w-96 px-3 py-2 rounded-tl-md rounded-bl-md' />
          <button className='bg-[#1f1f1f] hover:bg-black text-white px-3 py-2 rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md'>Search</button>
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[80%] flex flex-col h-full border-r border-r-gray-900 bg-[#00194e] ease-in-out duration-300'
            : 'ease-in-out w-[80%] duration-300 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Link to={'/'} onClick={handleNav} className='text-2xl font-bold m-4 text-white'>MovieReviews</Link>

        <div className='mt-2 mb-4 flex flex-col px-2 gap-2 items-start'>
          <input type='text' placeholder='Search movie...' className='border border-[#1f1f1f] outline-none px-3 py-2 rounded-md' />
          <button className='bg-white text-black px-3 py-2 rounded-md'>Search</button>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.href}
            onClick={handleNav}
            className='px-4 py-4 border-b border-t text-xl text-white cursor-pointer border-gray-300'
          >
            {item.text}
          </Link>
        ))}
        
      </ul>
    </div>
  );
};

export default Navbar;