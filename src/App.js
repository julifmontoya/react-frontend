import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotelListing from './HotelListing';
import HotelCreate from './HotelCreate';
import HotelEdit from './HotelEdit';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HotelListing />}></Route>
          <Route path='/hotel/create' element={<HotelCreate />}></Route>
          <Route path='/hotel/edit/:hotelId' element={<HotelEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
