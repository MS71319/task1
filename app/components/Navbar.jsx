import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchForm from './SearchForm';

const Navbar = () => {
  return (
    <header className="bg-white shadow px-5 py-4 fixed top-0 left-0 w-full z-50">
      <nav className="flex flex-wrap justify-between items-center gap-4">
        
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={35} height={27} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-7 pl-4">
          <Link href="/categories" className="text-gray-900 hover:text-red-500 font-medium">
            Categories
          </Link>
          <Link href="#" className="text-gray-700 hover:text-red-500 font-medium">
            Popular
          </Link>
          <Link href="#" className="text-gray-700 hover:text-red-500 font-medium">
            School
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <SearchForm />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-red-500 font-medium">
            Log In
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
