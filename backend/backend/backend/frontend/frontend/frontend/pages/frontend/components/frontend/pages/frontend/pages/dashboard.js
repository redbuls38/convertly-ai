import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/admin');
        setMessage(res.data.message || 'Welcome to dashboard!');
      } catch (err) {
        setMessage('Failed to load data.');
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding:'2rem' }}>
      <h1>Admin Dashboard</h1>
      <p>{message}</p>
      <p>Here you will manage users, payments, and content.</p>
    </div>
  );
}
