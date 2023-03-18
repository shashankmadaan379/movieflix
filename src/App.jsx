import React from 'react';
import Login from './pages/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Netflix from './pages/Netflix';
import SignUp from './pages/SignUp';
import Player from './components/Player';
import Movies from './pages/Movies'
import './index.css';
import TVShows from './pages/TvShows';
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/player' element={<Player/>}></Route>
        <Route exact path='/' element={<Netflix/>}></Route>
         <Route exact path='/movies' element={<Movies/>}></Route>
         <Route exact path='/tv' element={<TVShows/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;