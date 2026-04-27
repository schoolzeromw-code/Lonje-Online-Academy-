import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Register() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register',{name,email,password,role})
      .then(res=>{
        localStorage.setItem('token',res.data.token);
        if(role==='student') navigate('/student-dashboard');
        else navigate('/teacher-dashboard');
      })
      .catch(err=>alert(err.response.data.error));
  }

  return (
    <div>
      <Navbar/>
      <div className="flex justify-center items-center mt-20">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
          <h1 className="text-2xl font-bold text-loaBlue mb-6 text-center">Register</h1>
          <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded mb-4"/>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded mb-4"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border rounded mb-4"/>
          <select value={role} onChange={e=>setRole(e.target.value)} className="w-full p-2 border rounded mb-4">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <button className="w-full bg-loaGold text-white p-2 rounded hover:bg-yellow-600">Register</button>
        </form>
      </div>
    </div>
  );
}
