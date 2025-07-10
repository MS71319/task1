'use client';
import React, { useState } from 'react';

const EmailCard = ({ email }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={email.image}
          alt={email.subject}
          className="w-full h-60 object-top object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{email.subject}</h2>
          <p className="text-sm text-gray-500">
            {email.vertical} • {email.category}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={email.image}
              alt={email.subject}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="text-center mt-3 font-semibold text-gray-700">{email.subject}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailCard;
