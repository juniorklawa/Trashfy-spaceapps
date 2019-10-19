import React, { useState } from 'react';
import api from '../../services/api';
export default function Register({ history }) {
  const [username, setUsername] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { username, type, points: 10 });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (

    <>
      <div className="container">
        <div className="content">

          <h2 style={{ textAlign: 'center' }}>
            <b>Registrar</b>
          </h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <input
              id="username"
              type="username"
              placeholder="Ex: JoaoDasNeves"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <label htmlFor="username">Você é um:</label>
            <select onChange={event => setType(event.target.value)} style={{ height: 45, borderRadius: 0, border: 0, marginBottom: 20 }}>
              <option value="hero">Hero</option>
              <option value="helper">Helper</option>
              <option value="supporter">Supporter</option>
            </select>


            <button className="btn" type="submit">Registrar-se</button>
          </form>

        </div>

      </div>
    </>

  )
}