import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PaginaPrincipal from "./PaginaPrincipal";
import PantallaInicioSesion from './PantallaInicioSesion';
import PantallaRegistrarse from './PantallaRegistrarse';
import PostLogeo from './PostLogeo';
import PantallAgregarPost from './Agregarpost';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="" Component={PaginaPrincipal} />
        <Route path="/iniciar-sesion" Component={PantallaInicioSesion} />
        <Route path="/registrarse" Component={PantallaRegistrarse} />
        <Route path="/post-logeo" Component={PostLogeo} />
        <Route path="/agregar-post" Component={PantallAgregarPost} />
      </Routes>
    </Router>
  );
}

export default App;
