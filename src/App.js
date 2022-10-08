
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import FilterMovie from './Components/Movies/FilterMovie';
import Movies from './Components/Movies/Movies';
const api = createContext()
function App() {
  const [searcValue, setSeaechValue] = useState("")
  const [date, setDate] =useState(null)
  const dataObject ={
    searcValue,
    setSeaechValue,
    date,
    setDate
  }
  console.log(date);
  return (
    <div >
      <api.Provider value={ dataObject}>
        <Header></Header>
        {/* <Home></Home> */}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
       
          <Route path='/movie-details/:detailsId' element={<MovieDetails></MovieDetails>}></Route>
        </Routes>
      </api.Provider>
    </div>
  );
}

export default App;
export {api}
