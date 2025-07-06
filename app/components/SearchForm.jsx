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
      className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 bg-white shadow-md w-full max-w-4xl transition focus-within:ring-2 focus-within:ring-red-400"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search by keyword or category"
        className="w-full focus:outline-none"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
