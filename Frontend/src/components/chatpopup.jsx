import React from 'react';
import { Link } from 'react-router-dom';
export const ChatWidget = () => {
  return (
    <Link to='/chat'><button
      className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full w-14 h-14 text-2xl shadow-lg hover:bg-blue-700 z-50"
    >
    </button>
    </Link>
  );
};
