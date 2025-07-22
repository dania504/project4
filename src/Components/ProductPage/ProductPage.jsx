import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
import { FiSearch } from 'react-icons/fi'; // أيقونة البحث
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './ProductPage.css';
import photo from '../../assets/photo_2025-04-10_21-49-03.jpg';

// ✅ استيراد الصور من مجلد assets

const dummyData = {
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
  drinks:  Array.from({ length: 10 }, (_, i) => ({
    id: i + 60,
    title: 'Refreshing Drink',
    price: '10$',
    image: photo,
  })),
};

const Card = ({ item }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/product/${item.id}`); // التوجيه لصفحة التفاصيل مع معرف المنتج
  };

  return (
    <div className="card" onClick={goToDetails} style={{ cursor: 'pointer' }}>
      <div className="card-top">
        <span className="price-circle">{item.price}</span>
        <FiShoppingCart className="cart-icon" />
      </div>
      <img src={item.image} alt={item.title} className="card-img" />
      <h4 className="card-title">{item.title}</h4>
    </div>
  );
};

const CardSlider = ({ title, items }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <section className="slider-section">
      <h3 className="section-title">{title}</h3>
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={16}
          slidesPerView={'auto'}
          navigation={isDesktop}
          scrollbar={{ draggable: true }}
          speed={500}
          grabCursor={true}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} style={{ width: '160px' }}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const Header = () => (
  <header className="header">
    <div className="search-wrapper">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search here ..."
        className="search-input"
      />
    </div>
  </header>
);


const ProductPage = () => {
  return (
    <div className="app-container">
      <Header />
      <CardSlider title="Decoration" items={dummyData.decoration} />
      <CardSlider title="Candies" items={dummyData.candy} />
      <CardSlider title="Cakes" items={dummyData.cakes} />
      <CardSlider title="Drinks" items={dummyData.drinks} />
    </div>
  );
};

export default ProductPage;
