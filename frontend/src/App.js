import React from 'react';
// import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { LatestProduct } from './Pages/LatestProduct';
import { CheckNow } from './Pages/CheckNow';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kid_banner from './Components/Assests/banner_kids.png';
import Footer from './Components/Footer/Footer';
import Company from './Components/FotterLinks/Company';
import Products from './Components/FotterLinks/Products';
import Offices from './Components/FotterLinks/Offices';
import About from './Components/FotterLinks/About';
import Contact from './Components/FotterLinks/Contact';
// import { AuthContext } from './AuthContext';

function App() {
  // const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  // Hide Navbar on login and signup pages
  const hideNavbar = location.pathname === '/signup' || location.pathname === '/login';

  // Redirect user to login page if not authenticated
  // if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/signup') {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid' />} />
        <Route path='/latest' element={<LatestProduct />} />
        <Route path='/check' element={<CheckNow />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/company' element={<Company />} />
        <Route path='/products' element={<Products />} />
        <Route path='/offices' element={<Offices />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
