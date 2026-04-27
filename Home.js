import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-loaBlue">Welcome to LONJEZO ONLINE ACADEMY</h1>
        <p className="mt-4 text-xl text-gray-700">Learn online, anytime, anywhere.</p>
      </div>
    </div>
  );
}
