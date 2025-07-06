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
   <div className="flex flex-wrap gap-6 items-center justify-center my-6">
  {/* Vertical Filter */}
  <div className="relative inline-block">
    <label className="block text-sm font-medium text-gray-700 mb-1">Vertical</label>
    <select
      className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      value={selectedVertical}
      onChange={(e) => setVertical(e.target.value)}
    >
      <option value="">All Verticals</option>
      {verticals.map((v, i) => (
        <option key={i} value={v}>{v}</option>
      ))}
    </select>
  </div>

  {/* Category Filter */}
  <div className="relative inline-block">
    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
    <select
      className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      value={selectedCategory}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((c, i) => (
        <option key={i} value={c}>{c}</option>
      ))}
    </select>
  </div>
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