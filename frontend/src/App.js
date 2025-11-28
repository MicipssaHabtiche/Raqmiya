import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage"
import Laptops from './components/Laptops';
import Chairs from './components/Chairs';
import Headphones from './components/Headphones';
import Powersuplies from './components/Powersuplies';
import Fans from './components/Fans';
import Accessories from './components/Accessories';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Laptops' element={<Laptops />}></Route>
        <Route path='/Chairs' element={<Chairs />}></Route>
        <Route path='/Headphones' element={<Headphones />}></Route>
        <Route path='/Powersuplies' element={<Powersuplies />}></Route>
        <Route path='/Fans' element={<Fans />}></Route>
        <Route path='/Accessories' element={<Accessories />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
