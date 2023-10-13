import logo from './logo.svg';
import './App.css';
import FacebookLogin from "react-facebook-login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceso from './pages/Acceso';
import CocktailRandom from './pages/CocktailRandom'
import Tours from './pages/Tours';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CocktailRandom/>}></Route>
        <Route path='/Tours' element={<Tours/>}></Route>  
      </Routes>
    </BrowserRouter>     
  );
}

export default App;
