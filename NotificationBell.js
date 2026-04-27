import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function NotificationBell({ userId }) {
  const [notifications, setNotifications] = useState([]);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    socket.on(`notification:${userId}`, data => setNotifications(prev => [data, ...prev]));
    return () => socket.disconnect();
  }, [userId]);

  return (
    <div className="relative">
      <button className="relative text-loaBlue font-bold">🔔</button>
      {notifications.length > 0 && (
        <span className="absolute top-0 right-0 bg-loaGold text-white rounded-full px-2 text-xs">{notifications.length}</span>
      )}
      <div className="absolute mt-2 w-64 bg-white border shadow-lg rounded p-2 z-50">
        {notifications.length === 0 ? <p>No notifications</p> : notifications.map(n => (
          <div key={n.id} className="border-b py-1 text-sm">{n.message}</div>
        ))}
      </div>
    </div>
  );
    }
