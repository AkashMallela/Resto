import Home from './pages/Home';
import './App.css';
import Success from './pages/success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Menu from './pages/Menu';
import Chef from './pages/Chefs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/success' element={<Success />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/reservation' element={<Reservation />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/team' element={<Chef />}/>
          <Route path='/menu' element={<Menu />}/>
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
