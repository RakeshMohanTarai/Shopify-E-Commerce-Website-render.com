import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import ListProduct from '../../Components/ListProduct/ListProduct';
import Addproduct from '../../Components/AddProduct/AddProduct';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Addproduct />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin;