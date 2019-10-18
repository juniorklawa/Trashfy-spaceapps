import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { username });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
      <p>
       Faça seu login
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USUÁRIO *</label>
        <input 
          id="username" 
          type="username" 
          placeholder="Ex: johnarmstrong"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}