import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { username, password });
      if (res.data.success) {
        router.push('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', width:'300px' }}>
        <h2>Admin Login</h2>
        <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} style={{ marginBottom:'1rem', padding:'0.5rem' }}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{ marginBottom:'1rem', padding:'0.5rem' }}/>
        <button type="submit" style={{ padding:'0.5rem', backgroundColor:'#ff4d4d', color:'white', border:'none', borderRadius:'4px' }}>Login</button>
      </form>
    </div>
  );
}
