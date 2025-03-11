import { Container, Paper, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(false);

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
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
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
          <Typography variant="h5">Register</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Login;