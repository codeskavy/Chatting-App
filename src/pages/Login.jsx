import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation} from '6pp';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
 

  const toggleLogin = () => setIsLogin(prev => !prev);
  const name=useInputValidation("");
  const bio=useInputValidation("");
  const username=useInputValidation("",usernameValidator);
  const password=useInputValidation("");
  const avatar=useFileHandler("single");

  const handleLogin=(e)=>{
    e.preventDefault();
  };

  const handleSignUp=(e)=>{
    e.preventDefault();
  };
  return (
    <div style={{backgroundImage:"linear-gradient(rgba(200,200,200,0.5),rgba(120,110,220,0.5"}}>

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
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
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
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp}>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                 src={avatar.preview}/>
                 {
               avatar.error && (
                  <Typography m={"1rem"} width={"fit-content"} display={"block"} color="error" variant='caption'>
                    {avatar.error}
                  </Typography>
                )
              }
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
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                </IconButton>
              </Stack>
              <TextField 
                required 
                fullWidth 
                label="Name" 
                name="name"
                value={name.value} 
                onChange={name.changeHandler}
                margin="normal" 
                variant="outlined" 
              />
              <TextField 
                required 
                fullWidth 
                label="Bio" 
                name="bio"
                value={bio.value} 
                onChange={bio.changeHandler}
                margin="normal" 
                variant="outlined" 
              />
              <TextField 
                required 
                fullWidth 
                label="Username" 
                name="username"
                value={username.value} 
                onChange={username.changeHandler}
                margin="normal" 
                variant="outlined" 
              />

              {
                username.error && (
                  <Typography color="error" variant='caption'>
                    {username.error}
                  </Typography>
                )
              }
              <TextField 
                required 
                fullWidth 
                label="Password" 
                name="password"
                type="password" 
                value={password.value} 
                onChange={password.changeHandler}
                margin="normal" 
                variant="outlined" 
              />

{
                password.error && (
                  <Typography color="error" variant='caption'>
                    {password.error}
                  </Typography>
                )
              }
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
    </div>
    
  );
};

export default Login;
