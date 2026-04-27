import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        if(res.data.role==='student') navigate('/student-dashboard');
        else navigate('/teacher-dashboard');
      })
      .catch(err => alert(err.response.data.error));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
          <h1 className="text-2xl font-bold text-loaBlue mb-6 text-center">Login</h1>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded mb-4"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border rounded mb-4"/>
          <button className="w-full bg-loaGold text-white p-2 rounded hover:bg-yellow-600">Login</button>
        </form>
      </div>
    </div>
  );
    }
