import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const [courses,setCourses] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/courses')
      .then(res=>setCourses(res.data))
      .catch(err=>console.error(err));
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-loaBlue mb-6">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(course=><CourseCard key={course.id} course={course}/>)}
        </div>
      </div>
    </div>
  );
  }
