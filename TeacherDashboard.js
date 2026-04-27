import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import AnalyticsGraph from '../components/AnalyticsGraph';
import CourseCard from '../components/CourseCard';

export default function TeacherDashboard() {
  const [courses,setCourses]=useState([]);
  const teacherId=2; // logged-in teacher ID

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/dashboard/teacher/${teacherId}`)
      .then(res=>setCourses(res.data.courses))
      .catch(err=>console.error(err));
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-loaBlue mb-6">Teacher Dashboard</h1>
        <AnalyticsGraph teacherId={teacherId}/>
        <h2 className="text-2xl font-semibold text-loaBlue mb-2">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map(course=><CourseCard key={course.id} course={course}/>)}
        </div>
      </div>
    </div>
  );
    }
