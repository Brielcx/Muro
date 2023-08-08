import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword,  } from 'firebase/auth';
import { app } from './firestore';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const auth = getAuth(app);


function IniciarSesion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Post-logeo');
    } catch (error) {
      setError("Credenciales incorrectos");
    }
  };

  return (
    <div className='p-4 custom-card mx-auto' style={{width: '900px',height: '900px' }}>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email"  class="text-white" >Email</Label>
        <Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="password"  class="text-white" >Contraseña</Label>
        <Input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </FormGroup>
      <Button type="success">Iniciar sesión</Button>
      {error && <p>{error}</p>}
    </Form>
    </div>
  );
}

export default IniciarSesion;