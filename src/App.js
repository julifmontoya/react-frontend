import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotelList from './Pages/HotelList';
import Hotel from './Pages/Hotel';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HotelList />}></Route>
          <Route path='/hotel/' element={<Hotel />}></Route>
          <Route path='/hotel/:hotelId' element={<Hotel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
