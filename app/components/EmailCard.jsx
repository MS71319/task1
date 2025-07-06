import React from 'react';

const EmailCard = ({ email }) => {
  return (
    <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition">
    <img src={email.image} alt={email.subject} className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{email.subject}</h2>
        <p className="text-sm text-gray-500">{email.vertical} • {email.category}</p>
      </div>
    </div>
  );
};

export default EmailCard;
