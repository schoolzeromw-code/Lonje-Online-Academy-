import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-loaBlue text-white p-4 flex justify-between">
      <div className="font-bold text-xl">LOA</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-loaGold">Home</Link>
        <Link to="/courses" className="hover:text-loaGold">Courses</Link>
        <Link to="/student-dashboard" className="hover:text-loaGold">Student Dashboard</Link>
        <Link to="/teacher-dashboard" className="hover:text-loaGold">Teacher Dashboard</Link>
        <Link to="/login" className="hover:text-loaGold">Login</Link>
      </div>
    </nav>
  );
}
