import React from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./SignIn.css";
import cake from "../../assets/cake.png";

const SignIn = () => {
  const navigate = useNavigate(); // إنشاء متغير التوجيه

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    navigate("/occasion"); // التوجيه إلى صفحة Occasion
  };

  return (
    <div className="signin-container">
      <div className="circle">
        <img src={cake} alt="Avatar" className="avatar-img" />
      </div>

      <form onSubmit={handleSubmit} className="signin-form">
        <TextField
          label="Name"
          type="text"
          required
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "brown" } }}
          sx={{
            mb: 2,
            backgroundColor: "#feebd6",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": { borderColor: "brown", borderRadius: "20px" },
              "&:hover fieldset": { borderColor: "darkred" },
              "&.Mui-focused fieldset": { borderColor: "brown" },
              input: { color: "brown" },
            },
          }}
        />

        <TextField
          label="Enter Email"
          type="email"
          required
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "brown" } }}
          sx={{
            mb: 2,
            backgroundColor: "#feebd6",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": { borderColor: "brown", borderRadius: "20px" },
              "&:hover fieldset": { borderColor: "darkred" },
              "&.Mui-focused fieldset": { borderColor: "brown" },
              input: { color: "brown" },
            },
          }}
        />

        <TextField
          label="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{ style: { color: "brown" } }}
          sx={{
            mb: 2,
            maxWidth: 400,
            backgroundColor: "#feebd6",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": { borderColor: "brown", borderRadius: "20px" },
              "&:hover fieldset": { borderColor: "darkred" },
              "&.Mui-focused fieldset": { borderColor: "brown" },
              input: { color: "brown" },
            },
          }}
        />
        <p className="login-text">
          Already have an account? {" "}
          <a href="/login" className="login-link">LOGIN</a>
        </p>

        <Button
          type="submit"
          variant="contained"
          style={{ borderRadius: "20px" }}
          sx={{
            backgroundColor: "brown",
            "&:hover": { backgroundColor: "rgb(147, 44, 44)" },
            maxWidth: 150,
            width: "100%",
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
