import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import photo from '../../assets/photo_2025-04-10_21-49-03.jpg';

const dummyData = {
  cakes: Array.from({ length: 13 }, (_, i) => ({
    id: i + 40,
    title: 'Chocolate Glaze',
    price: 10,
    image: photo,
    description:
      'Fried cake doughnuts are dipped in a chocolate glaze and topped with your favorite sprinkles. Perfect for breakfast or dessert.',
  })),
  decoration: Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    title: 'Birthday Balloons',
    price: 5,
    image: photo,
    description:
      'Colorful helium balloons perfect for party decoration. Includes stars, hearts, and smiley faces to brighten any event.',
  })),
  candy: Array.from({ length: 13 }, (_, i) => ({
    id: i + 20,
    title: 'Candy Mix',
    price: 8,
    image: photo,
    description:
      'A mix of sour and sweet candies including gummies, lollipops, and chewy bites. Great for kids and adults alike.',
  })),
  drinks: Array.from({ length: 13 }, (_, i) => ({
    id: i + 60,
    title: 'Fruit Punch',
    price: 6,
    image: photo,
    description:
      'Refreshing fruit punch made with real juice. Best served cold, perfect for parties or relaxing evenings.',
  })),
};

const allProducts = [
  ...dummyData.cakes,
  ...dummyData.decoration,
  ...dummyData.candy,
  ...dummyData.drinks,
];

const Product = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = allProducts.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Product not found</div>;
  }

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => setQuantity(quantity + 1);

  const styles = {
    container: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    image: {
      width: '100%',
      maxHeight: '300px',
      objectFit: 'cover',
      borderRadius: '1rem',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.2rem',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '0.5rem',
    },
    description: {
      fontSize: '0.95rem',
      lineHeight: '1.4',
      marginBottom: '1rem',
      color: '#444',
    },
    quantityContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1rem 0',
      fontSize: '1rem',
      flexWrap: 'wrap',
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    quantityButton: {
      padding: '0.4rem 0.8rem',
      fontSize: '1rem',
      border: 'none',
      backgroundColor: '#ccc',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    quantityDisplay: {
      minWidth: '24px',
      textAlign: 'center',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    price: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    addToCart: {
      padding: '0.5rem 1rem',
      backgroundColor: '#888',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <h2 style={styles.title}>{product.title}</h2>
      <h4 style={styles.subtitle}>About Product</h4>
      <p style={styles.description}>{product.description}</p>

      <div style={styles.quantityContainer}>
        <span>Quantity</span>
        <div style={styles.quantityControls}>
          <button onClick={handleDecrease} style={styles.quantityButton}>−</button>
          <span style={styles.quantityDisplay}>{quantity}</span>
          <button onClick={handleIncrease} style={styles.quantityButton}>+</button>
        </div>
      </div>

      <div style={styles.footer}>
        <span style={styles.price}>${product.price * quantity}</span>
        <button style={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
