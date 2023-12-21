import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import RegistLogin from './Pages/RegistLogin';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import MenBanner from './Components/Assets/banner_mens.png';
import WomenBanner from './Components/Assets/banner_women.png';
import KidsBanner from './Components/Assets/banner_kids.png';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={MenBanner} category='men'/>}/>
          <Route path='/women' element={<ShopCategory banner={WomenBanner} category='women'/>}/>
          <Route path='/kids' element={<ShopCategory banner={KidsBanner} category='kid'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<RegistLogin enteryTo='login'/>}/>
          <Route path='/Register' element={<RegistLogin enteryTo='signUp'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
