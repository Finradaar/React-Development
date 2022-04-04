import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import logo from "./finradLogo/finradlogo.png";
import { Col, Image } from 'antd';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Orders from './components/Orders/Orders';

import {
  FcDownload,
  FcBullish,
  FcReading
} from "react-icons/fc";

import Downlaod from './components/Download';



import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StockLayout from './components/StocksLayout/StockLayout';
import Login from './components/Login/Login';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function HomePageLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sideBarMenuKey = useSelector(
    (state) => state.currentcomponentReducer.sideBarMenuItemKey
  );

  const headerName = useSelector(
    (state) => state.currentcomponentReducer.currentComponent
  );

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });


  return (
    <BrowserRouter>
      <Box sx={{
        display: 'flex'
      }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <AppBar position="fixed" open={open} color="primary" enableColorOnDark>
            <Toolbar sx={{ backgroundColor: 'black', }}>
              <Image src={logo} preview={false} style={{ height: 35 }} />
              <Col flex="10px"></Col>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap component="div" >
                {/* Persistent drawer */} {headerName}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              Finrad
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

            <List>
              <ListItem button component={Link} to="/stocks" >
                <ListItemIcon >
                  <FcBullish />
                </ListItemIcon>
                Stocks
              </ListItem>
              <ListItem button component={Link} to="/orders" >
                <ListItemIcon >
                  <FcReading />
                </ListItemIcon>
                Orders
              </ListItem>
              <ListItem button component={Link} to="/download" >
                <ListItemIcon >
                  <FcDownload />
                </ListItemIcon>
                Download
              </ListItem>

              {/* {['Stocks', 'Orders', 'Download'].map((text, index) => (
              <ListItem button key={text} component={Link} to={`/${text}`} >
                   {text === 'Stocks' ? to="/dayend" : "/dayend"}
                
                <ListItemIcon>
                  {text === 'Stocks' ? <FcBullish /> : ""}
                  {text === 'Orders' ? <FcReading /> : ""}
                  {text === 'Download' ? <FcDownload /> : ""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
            </List>
          </Drawer>
          <Main open={open}>

            <DrawerHeader />

            {/* <Orders /> */}


            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/stocks" element={<StockLayout />} />
              <Route exact path="/orders" element={<Orders />} />
              <Route exact path="/download" element={<Downlaod />} />
            </Routes>
          </Main>

        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}
