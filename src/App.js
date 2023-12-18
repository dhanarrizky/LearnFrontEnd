import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import RegistLogin from './Pages/RegistLogin';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category='men'/>}/>
          <Route path='/women' element={<ShopCategory category='women'/>}/>
          <Route path='/kids' element={<ShopCategory category='kids'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<RegistLogin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
