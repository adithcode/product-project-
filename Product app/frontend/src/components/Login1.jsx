import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  var [input, setInput] = useState({});
  var baseurl = import.meta.env.VITE_API_BASE_URL;
  var navigate = useNavigate();

  const inpuHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input); // Debugging: Check the input object
  };

  const addhandler = () => {
    console.log('Submitting:', input); // Debugging: Log the input before submission
    axios
      .post(`${baseurl}/api/login`, input)
      .then((res) => {
        console.log(res.data);

        // Check if the user exists in the response
        if (res.data.user) {
          sessionStorage.setItem('role', res.data.user.role);
          if (res.status === 200) {
            alert(res.data.message);
            if (res.data.user.role === 'admin') {
              navigate('/admin');
            } else {
              navigate('/product');
            }
          }
        } else {
          // Handle case where user is not found
          alert(res.data.message || 'User not found. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert('Invalid username or password. Please try again.');
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold' }}
        >
          Welcome to Product App
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          align="center"
        >
          Login to continue
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          name="email" // Updated to match backend field name
          onChange={inpuHandler}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          name="password" // Updated to match backend field name
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
          LOG IN
        </Button>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mt: 2, textAlign: 'center' }}
        >
          New here?{' '}
          <Link to={'/Sign'} style={{ textDecoration: 'none', color: '#1976d2' }}>
            Create an account
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;