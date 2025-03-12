import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    bio: '',
  });

  const toggleLogin = () => setIsLogin(prev => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add API call or authentication logic here
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSubmit}>
              <TextField 
                required 
                fullWidth 
                label="Username" 
                name="username"
                value={formData.username} 
                onChange={handleChange}
                margin="normal" 
                variant="outlined" 
              />
              <TextField 
                required 
                fullWidth 
                label="Password" 
                name="password"
                type="password" 
                value={formData.password} 
                onChange={handleChange}
                margin="normal" 
                variant="outlined" 
              />
              <Button variant="contained" sx={{ margin: "1rem 0" }} color="primary" type="submit">
                Login
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSubmit}>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 5,
                    right: 5,
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    ":hover": { backgroundColor: "rgba(0,0,0,0.7)" }
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" />
                </IconButton>
              </Stack>
              <TextField 
                required 
                fullWidth 
                label="Name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                margin="normal" 
                variant="outlined" 
              />
              <TextField 
                required 
                fullWidth 
                label="Bio" 
                name="bio"
                value={formData.bio} 
                onChange={handleChange}
                margin="normal" 
                variant="outlined" 
              />
              <TextField 
                required 
                fullWidth 
                label="Username" 
                name="username"
                value={formData.username} 
                onChange={handleChange}
                margin="normal" 
                variant="outlined" 
              />
              <TextField 
                required 
                fullWidth 
                label="Password" 
                name="password"
                type="password" 
                value={formData.password} 
                onChange={handleChange}
                margin="normal" 
                variant="outlined" 
              />
              <Button variant="contained" sx={{ margin: "1rem 0" }} color="primary" type="submit">
                Sign Up
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Log In Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
