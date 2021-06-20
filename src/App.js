import React,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Products , Navbar} from './Components'
import {commerce} from './lib/commerce';


const App = () => {
  const [products, setProducts]=useState([]);
  const fetchProducts= async() => {
    const {data}=await commerce.products.list();
    setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  },[]);
  

  return (
    <Router>
      <div className="App">
       
        <Navbar/>
        <Products products={products}/>
      </div>
    </Router>
  );
};

export default App;