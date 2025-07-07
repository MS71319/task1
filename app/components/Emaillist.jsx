'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import data from '../data/jsondata';
import EmailCard from './EmailCard';

const EmailList = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const [selectedVertical, setVertical] = useState('');
  const [selectedCategory, setCategory] = useState('');

  const verticals = [...new Set(data.map((e) => e.vertical))];
  const categories = [...new Set(data.map((e) => e.category))];

    const filteredEmails = data.filter((email) => {
    const matchQuery =
        email.subject.toLowerCase().includes(query.toLowerCase()) ||
        email.vertical.toLowerCase().includes(query.toLowerCase()) ||
        email.category.toLowerCase().includes(query.toLowerCase());

    const matchVertical = selectedVertical ? email.vertical === selectedVertical : true;
    const matchCategory = selectedCategory ? email.category === selectedCategory : true;

    return matchQuery && matchVertical && matchCategory;
    });

  return (
      <div className="px-6 py-10">
      <div className="flex flex-nowrap items-center gap-2 sm:gap-3 overflow-x-auto px-3 sm:px-6 lg:px-10 my-4">
        {/* Filter Label */}
        <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 whitespace-nowrap pl-1 sm:pl-0">
          Filter by:
        </span>

        {/* Vertical Filter */}
        <select
          className="bg-white border border-gray-300 text-[10px] sm:text-sm text-gray-700 py-1 px-2 sm:py-2 sm:px-3 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-400 transition"
          value={selectedVertical}
          onChange={(e) => setVertical(e.target.value)}
        >
          <option value="">All Verticals</option>
          {verticals.map((v, i) => (
            <option key={i} value={v}>{v}</option>
          ))}
        </select>

        {/* Category Filter */}
        <select
          className="bg-white border border-gray-300 text-[10px] sm:text-sm text-gray-700 py-1 px-2 sm:py-2 sm:px-3 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-400 transition"
          value={selectedCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </div>





      {/* Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmails.length > 0 ? (
          filteredEmails.map((email, i) => <EmailCard key={i} email={email} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default EmailList;