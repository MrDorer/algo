import logo from './logo.svg';
import './App.css';
import FacebookLogin from "react-facebook-login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceso from './pages/Acceso';
import CocktailRandom from './pages/CocktailRandom'
import CocktailRandomStripped from './pages/CocktailRandomStripped';
import Tours from './pages/Tours';
import CatApi from './pages/CatApi'
import CatApi2 from './pages/CatApi2'
import Perenual from './pages/Perenual';
import Actividades from './pages/Actividades'
import Qrcode from './pages/Qrcode';


function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<CocktailRandom/>}></Route>
        <Route path='/st' element={<CocktailRandomStripped/>}></Route>
        <Route path='/tours' element={<Tours/>}></Route>
        <Route path='/cat' element={<CatApi/>}></Route>
        <Route path='/cat2' element={<CatApi2/>}></Route>  
        <Route path='/perenual' element={<Perenual/>}></Route>
        <Route path='/actividades' element={<Actividades/>}></Route>   
        <Route path='/qr' element={<Qrcode/>}> </Route>
      </Routes>
    </BrowserRouter>     
  );
}

export default App;
