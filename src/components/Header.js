import React from 'react';
// images
import Logo from "../assets/logo.jpeg"

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className="flex justify-between items-center">
        {/* logo */}
        <a className="w-5rem" href='#'>
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </a>
        {/* button */}
        <a href="https://github.com/rezahakimalzami03/">
          <button className='btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
