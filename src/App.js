import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      
     <Router>
      <ul className='list-group list-group-horizontal'>
        <li className='list-group-item'>
          <Link to='/Home' className='nav-link'>Home</Link>
        </li>
        <li className='list-group-item'>
        <Link to='/About' className='nav-link'>About</Link>
          
        </li>
        <li className='list-group-item'>
        <Link to='/Services' className='nav-link'>Services</Link>
        </li>
        <li className='list-group-item'>
        <Link to='/Contact' className='nav-link'>CONTACT US</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
