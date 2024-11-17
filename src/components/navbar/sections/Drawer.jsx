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
  PersonAddOutlined,
  Close
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Icons = (Icon) => {
  return <Icon sx={{ ml: '10px', color: 'white' }} />;
}

const pages = [
  { name: 'home', url: '/' }, 
  { name: 'upload', url: '/upload' }, 
  { name: 'requests', url: '/requests' }, 
  { name: 'fórum', url: '/forum' }, 
  { name: 'contato', url: '/contato' }, 
  { name: 'login', url: '/login' }, 
  { name: 'criar conta', url: '/cadastro' }
];
const icons = [
  Icons(Home),
  Icons(CloudUpload),
  Icons(CloudDownload),
  Icons(Forum),
  Icons(MailOutline),
  Icons(Login),
  Icons(PersonAddOutlined),
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: '#013A93', color: 'white' }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Close onClick={toggleDrawer(false)} sx={{ '&:hover': { backgroundColor: '#6899E6'} }} />
      </Box>
      <List>
        {pages.map((text, index) => (
          <React.Fragment key={text.nome}>
            <NavLink 
              key={text.name}
              to={text.url}
              style={({isActive}) => ({
                backgroundColor: isActive ? '#0045AF' : '',
                textDecoration: 'none',
                display: 'flex',
              })}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ '&:hover': { backgroundColor: '#6899E6'} }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <Typography variant="h6" sx={{ color: 'white', fontFamily: 'Roboto',  fontSize: 14, m: '5px 0' }}>{text.name.toUpperCase()}</Typography>
                </ListItemButton>
              </ListItem>
            </NavLink>
            {index === 4 && <Divider sx={{ margin: '10px', backgroundColor: 'lightgray' }} />}
          </React.Fragment>
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
        <MenuIcon sx={{ color: 'white' }}/>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
