// src/pages/Wedding.jsx
import React from 'react';
import photo from '../../assets/photo_2025-04-10_21-49-03.jpg';
import ProductPage from '../ProductPage/ProductPage.jsx';

import './Wedding.css';

const wedding = {
  cakes: Array.from({ length: 13 }, (_, i) => ({
    id: i + 40,
    title: 'Chocolate Glaze',
    price: 10,
    image: photo,
  })),
  decoration: Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    title: 'Birthday Balloons',
    price: 5,
    image: photo,

  })),
  candy: Array.from({ length: 13 }, (_, i) => ({
    id: i + 20,
    title: 'Candy Mix',
    price: 8,
    image: photo,

  })),
  drinks: Array.from({ length: 13 }, (_, i) => ({
    id: i + 60,
    title: 'Fruit Punch',
    price: 6,
    image: photo,
  })),
};

const Wedding = () => {
  return (
    <>
      <ProductPage data={wedding} />

    </>
  );
};

export default Wedding;
