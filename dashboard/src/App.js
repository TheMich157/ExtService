import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetch('/api/user/list', {
      headers: { Authorization: 'Bearer ' + token }
    }).then(res => res.json()).then(setUsers).catch(() => {});
  }, [token]);

  if (!token) {
    return (
      <div className="login-wrapper">
        <form className="login-box" onSubmit={login}>
          <h2>Admin Login</h2>
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <button className="logout" onClick={() => { localStorage.removeItem('token'); setToken(''); }}>Logout</button>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Coins</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id || u.userId}>
              <td>{u.userId}</td>
              <td>{u.coins}</td>
              <td>{u.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
