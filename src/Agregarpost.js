import React from 'react';
import './App.css';
import AgregarPost from './componentes/agregar';


function PantallAgregarPost() {

    return (
        
        <div>
            <div className='text-center'>
                <br></br>
            <h1 class="text-white">Muro</h1>
            </div>
            <br></br>
            <AgregarPost/>
            <br></br>
        </div>
    );
}

export default PantallAgregarPost;