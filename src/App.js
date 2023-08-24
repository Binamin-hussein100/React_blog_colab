//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import Inbox from './components/Inbox';
import {Routes, Route} from "react-router-dom";
import Certificates from "./components/Certificates";
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
         <Route path='/' element={<HomePage />}/> 
         <Route path='/certificates' element={<Certificates/>}/>
         <Route path='/inbox' element={<Inbox />}/>
      </Routes>
      
    </div>
  );
}

export default App;
