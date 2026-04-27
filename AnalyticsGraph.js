import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function AnalyticsGraph({ teacherId }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/analytics/teacher/${teacherId}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [teacherId]);

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-2xl font-bold text-loaBlue mb-4">Course Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="course"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="average_grade" fill="#D4AF37" name="Average Grade"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
    }
