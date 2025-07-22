// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen/SplashScreen.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx"; 
import Occasion from "./Components/Occasion/Occasion.jsx";
import Cart from "./Components/Cart/Cart.jsx"
import Profile from "./Components/Profile/Profile.jsx"
import Birthday from "./Components/Birthday/Birthday.jsx"
import Wedding from "./Components/Wedding/Wedding.jsx"
import Boyorgirl from "./Components/Boyorgirl/Boyorgirl.jsx"
import Graduation from "./Components/Graduation/Graduation.jsx"
import Product from './Components/Product/Product.jsx';
import ProductPage from './Components/ProductPage/ProductPage.jsx'

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<SplashScreen />} />{" "}
        <Route path="/signin" element={<SignIn />} />{" "}
        <Route path="/occasion" element={<Occasion />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/birthday" element={<Birthday />} />{" "}
       <Route path="/boyorgirl" element={<Boyorgirl />} />{" "}
      <Route path="/wedding" element={<Wedding />} />{" "}
      <Route path="/graduation" element={<Graduation />} /> {" "}
       <Route path="/product/:id" element={<Product />} />{" "}
       <Route path="/productpage" element={<ProductPage />} />{" "}
       
      </Routes>{" "}
    </Router>
  );
}
export default App;
