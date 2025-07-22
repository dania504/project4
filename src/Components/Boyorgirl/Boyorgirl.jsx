// src/pages/Boyorgirl.jsx
import React from 'react';
import photo from '../../assets/photo_2025-04-10_21-49-03.jpg';
import ProductPage from '../ProductPage/ProductPage.jsx';
import './Boyorgirl.css';


const BoyorGirlData = {
  cakes: Array.from({ length: 10 }, (_, i) => ({
    id: i + 40,
    title: 'Delicious Cake',
    price: '30$',
    image: photo,
  })),
  decoration: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: 'Colorful Balloons',
    price: '15$',
    image: photo,
  })),
  candy: Array.from({ length: 10 }, (_, i) => ({
    id: i + 20,
    title: 'Mixed Candy',
    price: '20$',
    image: photo,
  })),
  drinks: Array.from({ length: 10 }, (_, i) => ({
    id: i + 60,
    title: 'Refreshing Drink',
    price: '10$',
    image: photo,
  })),
};

const Boyorgirl = () => {
  return (
    <>
      <ProductPage data={BoyorGirlData} />
    
    </>
  );
};

export default Boyorgirl;
