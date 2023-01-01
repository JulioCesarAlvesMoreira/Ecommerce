import Jumbotron from '../components/cards/Jumbotron'
import { useState } from 'react';

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name,email,password);
    } catch (err) {
      console.log(err);
    }
  }

    return (
      <div>
    <Jumbotron title="Register" />

    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={handleSubmit}>
          <input 
          type="text"
          className='form-control mb-4 p-2'
          placeholder='Digite seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          />

         <input 
          type="email"
          className='form-control mb-4 p-2'
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <input 
          type="password"
          className='form-control mb-4 p-2'
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn btn-primary' type='submit'>
            Acessar
          </button>
          </form>

        </div>
      </div>
    </div>
  </div>
    );
  }