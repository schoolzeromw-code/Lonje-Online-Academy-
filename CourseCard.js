import React from 'react';
import axios from 'axios';

export default function CourseCard({ course }) {
  const enroll = () => {
    const studentId = 1; // Replace with logged-in user ID
    axios.post(`http://localhost:5000/api/courses/${course.id}/enroll`, { studentId })
      .then(() => alert('Enrolled successfully!'))
      .catch(err => alert(err.message));
  };

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg">
      <h2 className="text-xl font-semibold text-loaBlue">{course.title}</h2>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <button onClick={enroll} className="mt-4 bg-loaGold text-white px-4 py-2 rounded hover:bg-yellow-600">
        Enroll
      </button>
    </div>
  );
    }
