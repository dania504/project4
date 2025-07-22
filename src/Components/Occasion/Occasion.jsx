import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import birthday from "../../assets/birthday.jpg";
import boyorgirl from "../../assets/boyorgirl.jpg";
import wedding from "../../assets/wedding.jpg";
import graduation from "../../assets/graduation.webp";
// import BottomBar from '../BottomBar.jsx'; // ✅ استيراد البتم بار
// قائمة المناسبات مع الصور
const occasions = [
  { title: "Birthday", image: birthday },
  { title: "Wedding", image: wedding },
  { title: "Graduation", image: graduation },
  { title: "Boy or Girl?", image: boyorgirl },
];

// تصميم الكونتينر الرئيسي
const OccasionContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
  padding-bottom: 0; /* ✅ أزلنا المساحة الخاصة بالـ bottom bar */
  background-color: #deb3ad;

  .card {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(90vh - 70px); /* الكارد يملا الشاشة بدون bottom bar */
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      transition: transform 0.4s ease-in-out;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 15px;
      text-align: center;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;

    .card {
      height: calc((100vh - 80px) / 2); /* كل كارد ياخذ نصف الشاشة طوليًا */
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .card {
      height: 250px;
    }

    .overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Occasion = () => {
  return (
    <>
      <OccasionContainer>
        {occasions.map((occasion, index) => {
          const path =
            "/" + occasion.title.toLowerCase().replace(/\s+/g, "").replace("?", "");
          const cardContent = (
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={occasion.image} alt={occasion.title} />
              <div className="overlay">
                <h2>{occasion.title}</h2>
              </div>
            </motion.div>
          );

          return (
            <Link
              to={path}
              key={index}
              style={{
                textDecoration: "none",
                width: "100%",
                display: "block",
              }}
            >
              {cardContent}
            </Link>
          );
        })}
      </OccasionContainer>

    </>
  );
};

export default Occasion;
