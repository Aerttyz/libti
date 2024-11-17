import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from './sections/Drawer';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Container, 
  Button 
} from '@mui/material';
import { 
  Home, 
  CloudUpload, 
  CloudDownload,
  Forum,
  MailOutline,
  Login,
  PersonAddOutlined,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(() => ({
  display: 'block',
  position: 'sticky',
  backgroundColor: '#013A93',
}));

const NavLinkMenu = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: 'white',
  display: 'flex',
  fontFamily: 'Roboto',
  fontSize: 12,
  marginRight: "15px",
  padding: '7px 10px',
  borderRadius: '20px',
  alignItems: 'center',
  '&:hover': {
    color: '#6899E6',
  },
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: 'white', 
  width: '90px', 
  borderRadius: '7px', 
  color: 'black', 
  fontSize: 12, 
  fontFamily: 'Roboto', 
  marginRight: 2
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 1000,
  letterSpacing: '.1rem',
  color: 'inherit',
  textDecoration: 'none',
  wordWrap: 'nowrap',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1, 
  alignItems: 'center', 
  justifyContent: 'center', 
  paddingLeft: 10,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

function StyledIcons (Icon) {
  return <Icon sx={{ marginRight: 1, width: '21px' }} />;
}

const pages = [
  { name: 'home', url: '/' }, 
  { name: 'upload', url: '/upload' }, 
  { name: 'requests', url: '/requests' }, 
  { name: 'fórum', url: '/forum' }, 
  { name: 'contato', url: '/contato' }, 
];
const icons = [
  StyledIcons(Home),
  StyledIcons(CloudUpload),
  StyledIcons(CloudDownload),
  StyledIcons(Forum),
  StyledIcons(MailOutline),
];

function ResponsiveAppBar() {
  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Drawer id="menu-appbar" sx={{ display: { xs: 'block', md: 'none' } }} />
          </Box>
          <StyledTypography variant="h5">
            <a href='/' style={{ textDecoration: 'none', color: 'white' }}>LIB<span style={{ color: '#013A93', WebkitTextStroke: '1px white' }}>TI</span></a>
          </StyledTypography>
          <StyledBox>
            {pages.map((page) => (
              <NavLinkMenu
                key={page.name}
                to={page.url}
                style={({isActive}) => ({
                  backgroundColor: isActive ? '#0045AF' : '',
                })}
              >
                {icons[pages.indexOf(page)]}
                {page.name.toUpperCase()}
              </NavLinkMenu>
            ))}
          </StyledBox>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <StyledButton component={NavLink} to={'/login'}>
              <Login sx={{ marginRight: 1, width: '18px' }} />
              LOGIN
            </StyledButton>
            <Button color='inherit' sx={{ fontSize: 12, fontFamily: 'Roboto' }} component={NavLink} to='/cadastro'>
              <PersonAddOutlined sx={{ marginRight: 1, width: '18px' }} />
              CRIAR CONTA
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
