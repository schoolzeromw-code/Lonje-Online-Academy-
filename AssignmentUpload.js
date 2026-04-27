import React, { useState } from 'react';
import axios from 'axios';

export default function AssignmentUpload({ assignmentId, studentId }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert('Select a file');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('studentId', studentId);

    axios.post(`http://localhost:5000/api/assignments/${assignmentId}/submit-file`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(() => alert('File uploaded!'))
      .catch(err => alert(err.message));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-2" />
      <button type="submit" className="bg-loaGold text-white px-4 py-2 rounded hover:bg-yellow-600">Upload</button>
    </form>
  );
    }
