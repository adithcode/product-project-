import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  var [input, setInput] = useState({});
  var baseurl = import.meta.env.VITE_API_BASE_URL;
  var navigate = useNavigate();

  const inpuHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const addhandler = () => {
    console.log("Clicked");
    axios
      .post(`${baseurl}/api`, input)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          PRODUCT APP
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          align="center"
        >
          Signup to create an account
        </Typography>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
          name="fname"
          onChange={inpuHandler}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          name="ename"
          onChange={inpuHandler}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          name="password"
          type="password"
          onChange={inpuHandler}
        />
        <Button
          onClick={addhandler}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mt: 2, textAlign: "center" }}
        >
          Already a user?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
            Login
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Signup;