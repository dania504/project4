import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/cake.png";
const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signin", { replace: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  const splashStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "#deb3ad",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  };
  const logoStyle = {
    width: "40vw",
    maxWidth: "300px",
    height: "auto",
    objectFit: "contain",
  };
  return (
    <div style={splashStyle}>
      {" "}
      <img src={avatar} alt="Logo" style={logoStyle} />{" "}
    </div>
  );
};
export default SplashScreen;