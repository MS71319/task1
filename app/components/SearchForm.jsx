'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const SearchForm = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <form
      action="/"
      method="GET"
      className="flex items-center gap-2 sm:gap-3 border border-gray-300 rounded-3xl px-3 sm:px-4 py-1 sm:py-2 bg-white shadow-sm w-full max-w-4xl transition focus-within:ring-2 focus-within:ring-red-400"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search by keyword or category"
        className="w-full text-xs sm:text-sm focus:outline-none placeholder:text-[11px] sm:placeholder:text-sm"
      />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full hover:bg-red-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
