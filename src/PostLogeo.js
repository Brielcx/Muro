import React from 'react';
import './App.css';
import PostList from './componentes/PostList';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function PostLogeo() {

    return (
        <div>
           <div className='text-center'>
                <br></br>
            <h1  class="text-white" >Muro</h1>
            </div>
            <div className='text-center'>
                <h4 class="text-white">Autenticado</h4>
            </div>
            <br></br>
            <div className='d-flex justify-content-center'>
            <div style={{ paddingRight: '10px' }}>
            <Link to="/agregar-post">
            <Button color="success">Nuevo Post</Button>
            </Link>
            </div>
            <Link to="/">
            <Button color="danger">Cerrar Sesion</Button>
            </Link>
            </div>
            <PostList/>
            <br></br>
        </div>
    );
}

export default PostLogeo;