import React from 'react';
import './App.css';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Order } from './components/Order';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            注文
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>コンポーネントの切り替えがしたい。</div>

      <Box>
        <p>Linkのサンプル</p>
        <div>
          <Link component={RouterLink} to="/">
            Link to Home (index)
          </Link>
          <br />
          <Link component={RouterLink} to="/product">
            Link to Product component.
          </Link>
          <br />
          <Link component={RouterLink} to="/signin">
            ログイン画面
          </Link>
          <br />
          <Link component={RouterLink} to="/signup">
            ユーザ登録
          </Link>
          <br />
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/"
          >
            Button to home
          </Button>
        </div>
      </Box>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Product />} />
      </Routes>


    </div>
  );
}

export default App;
