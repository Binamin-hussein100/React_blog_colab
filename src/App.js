import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import Certificates from './components/Certificates';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
         <Route path='/' element={<HomePage />}/> 
         <Route path='/certificates' element={<Certificates/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
