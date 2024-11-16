import React from 'react';
import { 
  Box, 
  Drawer, 
  Button, 
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

const Icons = (Icon) => {
  return <Icon sx={{ ml: '10px', color: 'white' }} />;
}

const pages = ['HOME', 'UPLOAD', 'REQUESTS', 'FÓRUM', 'CONTATO', 'LOGIN', 'CRIAR CONTA'];
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
          <React.Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ '&:hover': { backgroundColor: '#6899E6'} }}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  {icons[index]}
                </ListItemIcon>
                <Typography variant="h6" sx={{ color: 'white', fontFamily: 'Roboto',  fontSize: 14, m: '5px 0' }}>{text}</Typography>
              </ListItemButton>
            </ListItem>
            {index === 4 && <Divider sx={{ margin: '10px', backgroundColor: 'lightgray' }} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );  

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuIcon sx={{ color: 'white' }}/>
        </IconButton>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
