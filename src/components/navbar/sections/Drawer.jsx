import React from 'react';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Typography
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  CloudUpload,
  CloudDownload,
  Forum,
  MailOutline,
  Login,
  Logout,
  AccountCircle,
  PersonAddOutlined,
  Close
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Icons = (Icon) => {
  return <Icon sx={{ ml: '10px', color: 'white' }} />;
}

const ItemsMenu = (props) => {
  const { text, logout, toggleDrawer } = props;
  return (
    <React.Fragment key={text.name}>
      <NavLink
        key={text.name}
        to={text.url}
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#0045AF' : '',
          textDecoration: 'none',
          display: 'flex',
        })}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{ '&:hover': { backgroundColor: '#6899E6' } }}
            onClick={text.name === 'sair' ? logout : toggleDrawer(false)}
          >
            <ListItemIcon>
              {text.icon}
            </ListItemIcon>
            <Typography variant="h6" sx={{ color: 'white', fontFamily: 'Roboto', fontSize: 14, m: '5px 0' }}>{text.name.toUpperCase()}</Typography>
          </ListItemButton>
        </ListItem>
      </NavLink>
    </React.Fragment>
  );
}

const pages = [
  { name: 'home', url: '/', role: 'all', icon: Icons(Home) },
  { name: 'upload', url: '/upload', role: 'user', icon: Icons(CloudUpload) },
  { name: 'requests', url: '/requests', role: 'admin', icon: Icons(CloudDownload) },
  { name: 'fórum', url: '/forum', role: 'user', icon: Icons(Forum) },
  { name: 'contato', url: '/contato', role: 'all', icon: Icons(MailOutline) },
];

const pagesAuth = [
  { name: 'login', url: '/login', role: 'all', icon: Icons(Login) },
  { name: 'cadastro', url: '/cadastro', role: 'all', icon: Icons(PersonAddOutlined) },
  { name: 'perfil', url: '/perfil', role: 'user', icon: Icons(AccountCircle) },
  { name: 'sair', url: '/logout', role: 'user', icon: Icons(Logout) },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: '#013A93', color: 'white', overflow: 'scroll' }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Close onClick={toggleDrawer(false)} sx={{ '&:hover': { backgroundColor: '#6899E6' } }} />
      </Box>
      <List>
        {pages.filter(page => !isAuthenticated ? page.role !== 'admin' : page).map((text, index) => (
          <ItemsMenu text={text} key={index} logout={logout} toggleDrawer={toggleDrawer} />
        ))}
        <Divider sx={{ margin: '10px', backgroundColor: 'lightgray' }} />
        {pagesAuth.filter(page => isAuthenticated ? page.role === 'user' : page.role === 'all').map((text, index) => (
          <ItemsMenu text={text} key={index} logout={logout} toggleDrawer={toggleDrawer} />
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
