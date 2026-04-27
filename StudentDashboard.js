import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import ProgressBar from '../components/ProgressBar';

export default function StudentDashboard() {
  const [courses,setCourses] = useState([]);
  const [assignments,setAssignments] = useState([]);
  const studentId=1; // Replace with logged-in user ID

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/dashboard/student/${studentId}`)
      .then(res=>{
        setCourses(res.data.courses);
        setAssignments(res.data.assignments);
      })
      .catch(err=>console.error(err));
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-loaBlue mb-6">Student Dashboard</h1>
        <ProgressBar progress={50}/>
        <h2 className="text-2xl font-semibold text-loaBlue mb-2">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map(course=><CourseCard key={course.id} course={course}/>)}
        </div>
      </div>
    </div>
  );
}
