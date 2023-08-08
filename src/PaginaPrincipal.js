import './App.css';
import React from 'react';
import PostList from './componentes/PostList';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function PaginaPrincipal() {
  return (
    <div>
      <br></br>
      <div className='text-center'>
                <br></br>
            <h1 class="text-white" >Muro</h1>
            </div>
      <br></br>
      <div className='d-flex justify-content-center'>
      <div style={{ paddingRight: '10px' }}>
      <Link to="/iniciar-sesion">
      <Button color="success">Iniciar Sesion</Button>
      </Link>
      </div>
      <Link to="/registrarse">
      <Button color="secondary">Registrarse</Button>
      </Link>
      </div>
      <br></br>
      <PostList/>
    </div>
  );
}

export default PaginaPrincipal;