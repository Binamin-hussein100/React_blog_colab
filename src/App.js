import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import Certificates from './components/Certificates';

function App() {
  return (
    <div >
      <Navbar/>
      <HomePage />
      <Certificates/>

    </div>
  );
}

export default App;
