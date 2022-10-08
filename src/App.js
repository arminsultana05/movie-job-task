
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Movies from './Components/Movies/Movies';

function App() {
  return (
    <div >

    <Header></Header>
    {/* <Home></Home> */}
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/movie-details/:detailsId'  element={<MovieDetails></MovieDetails>}></Route>
    </Routes>
    </div>
  );
}

export default App;
