import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, increment } from 'firebase/firestore';
import { app, firestoreInstance } from './firestore';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

function Registrarse() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userID = userCredential.user.uid;
      const usuariosRef = collection(firestoreInstance, 'User');
      await addDoc(usuariosRef, {
        id: increment(1),
        nombre: nombre,
        userID: userID,
        email: email,
        password: password
      });
      navigate('/Post-logeo');
      
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='p-4 custom-card mx-auto' style={{width: '900px',height: '900px' }}>
    <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="nombre"  class="text-white" >Nombre</Label>
      <Input type="text" name="nombre" id="nombre" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
    </FormGroup>
    <FormGroup>
      <Label for="email"  class="text-white" >Email</Label>
      <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
    </FormGroup>
    <FormGroup>
      <Label for="password" class="text-white">Contraseña</Label>
      <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
    </FormGroup>
    <Button type="success">Registrarse</Button>
    {error && <FormFeedback>{error}</FormFeedback>}
  </Form>
  </div>
  );
}

export default Registrarse;