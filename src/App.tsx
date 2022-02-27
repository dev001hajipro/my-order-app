import React from 'react';
import './App.css';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Order } from './components/Order';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { LinkSample } from './components/LinkSample';

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
            メンバー管理アプリ
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {
            ['Inbox', 'Starred'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <Link component={RouterLink} to="/">
                  Link to Home (index)
                </Link>

                <ListItemText primary={text} />
              </ListItem>
            ))
          }
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />

        <LinkSample></LinkSample>
      </Box>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Product />} />
      </Routes>

    </Box>
  );
}

export default App;
