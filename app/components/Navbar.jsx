import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SearchForm from './SearchForm';


const Navbar = () => {
  return (
    <header className="bg-white shadow px-5 py-4 fixed top-0 left-0 w-full z-50">
      <nav className="flex flex-wrap justify-between items-center gap-4">

        <div className="flex items-center gap-7">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={40} height={30} />
          </Link>

          <Link href="#" className="text-gray-900 hover:text-red-500 font-medium ">
            Categories
          </Link>
          <Link href="#" className="text-gray-700 hover:text-red-500 font-medium">
            Popular
          </Link>
          <Link href="#" className="text-gray-700 hover:text-red-500 font-medium">
            School
          </Link>
        </div>

        {/* <div className="flex-1 hidden md:flex px-4">
          <input
            type="text"
            placeholder="🔍 Search by keyword or category"
            className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
          />
        </div> */}
        <div className="flex-1 hidden md:flex justify-center">
          <SearchForm />
        </div>

        <div className="flex items-center gap-4">
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
