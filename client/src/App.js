import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
