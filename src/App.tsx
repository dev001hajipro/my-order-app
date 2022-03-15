import React, { useEffect, useState } from 'react';
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
import { TakeAPaidVacation } from './components/TakeAPaidVacation';
import TodoList from './components/TodoList';
import { onSnapshot, collection, QuerySnapshot } from 'firebase/firestore';
import { db } from './FirebaseInit';
import TodoForm from './components/TodoForm';

const drawerWidth = 240;

function App() {

  // todo: should change generics type. like a `User[]`
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (querySnapShot: QuerySnapshot) => {

      setTodos(querySnapShot.docs.map(v => ({ ...v.data(), id: v.id })))
      console.log(todos)
    })
    return unsubscribe
  })

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
        variant="persistent"
        anchor="left"
        open={true}
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
            [
              { text: 'Home', path: '/home' },
              { text: 'Order', path: '/order' },
              { text: 'Signin', path: '/signin' },
              { text: '有給申請', path: '/takeapaidvacation' },
              { text: 'LinkSample', path: '/linksample' },
              { text: 'TodoList', path: '/todolist' },
              { text: 'TodoForm', path: '/todoform' },
            ].map((o, index) => (
              <ListItem button key={o.text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <Link component={RouterLink} to={o.path}>
                  <ListItemText primary={o.text} />
                </Link>


              </ListItem>
            ))
          }
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, padding: 3 }}
      >
        <Toolbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/takeapaidvacation" element={<TakeAPaidVacation />} />
          <Route path="/linksample" element={<LinkSample />} />

          <Route path="/todolist" element={<TodoList items={todos} />} />
          <Route path="/todoform" element={<TodoForm />} />

          <Route path="*" element={<Product />} />
        </Routes>

      </Box>

    </Box>
  );
}

export default App;
