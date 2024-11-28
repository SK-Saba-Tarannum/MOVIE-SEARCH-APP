import './App.css'
import Dashboard from "./components/dashboard"
import MovieDetail from './components/MovieDetail';
import Login from './components/login';

import { Route,Routes } from 'react-router-dom';


function App() {
  
  return (
  
      <Routes>
        <Route path="/" element={ <Dashboard/>}/>
        <Route path="/MovieDetail" element={ <MovieDetail/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes> 
  )
}
export default App


