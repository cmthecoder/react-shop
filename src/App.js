import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Shop />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
