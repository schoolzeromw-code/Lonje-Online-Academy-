import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-loaBlue mb-2">Course Progress</h2>
      <div className="w-full bg-gray-200 rounded h-6">
        <div className="bg-loaGold h-6 rounded" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="mt-2 text-gray-700">{progress}% completed</p>
    </div>
  );
    }
