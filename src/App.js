import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from './components/Store';
import Products from './components/product-type/Products';
import Cart from './components/Cart';
import Warehouse from './components/Warehouse';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import ProductCategory from './components/product-type/ProductCategory';
import RecieveProducts from "./components/return-policy/RecieveProducts";
import DamageProducts from "./components/return-policy/DamageProducts";
import RefundProducts from "./components/return-policy/RefundProducts";
import ReturnProducts from "./components/return-policy/ReturnProducts";
import DoorToDoorStorage from "./components/DoorToDoorStorage";
import SelfAccessStorage from "./components/SelfAccessStorage";
import DocumentStorage from "./components/DocumentStorage";
import MarketingMarchandise from "./components/MarketingMarchandise";
import RetailAndEcommerce from "./components/RetailAndEcommerce";
import CoWorkingAndCoWareHouse from "./components/CoWorkingAndCoWareHouse";
import OfficeWithStorage from "./components/OfficeWithStorage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
  
     {/* <Store />
     <Products />
     <Cart />
     <Warehouse />
     <Home />
     <Footer />
     <ProductCategory />
     <RecieveProducts />
     <ReturnProducts />
     <DamageProducts />
     <RefundProducts /> */}

<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/doortodoorstorage" element={<DoorToDoorStorage />} />
    <Route path="/selfaccessstorage" element={<SelfAccessStorage />} />
    <Route path="/documentstorage" element={<DocumentStorage />} />
    <Route path="/marketingmarchandise" element={<MarketingMarchandise />} />
    <Route path="/retailandecommerce" element={<RetailAndEcommerce />} />
    <Route path="/coworkingandcowarehouse" element={<CoWorkingAndCoWareHouse />} />
    <Route path="/officewithstorage" element={<OfficeWithStorage />} />
  </Routes>
</Router>
    
         
    </div>
  );
}

export default App;
