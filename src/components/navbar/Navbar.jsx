import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from './sections/Drawer';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Avatar
} from '@mui/material';
import {
  Home,
  CloudUpload,
  CloudDownload,
  Forum,
  MailOutline,
  Login,
  Logout,
  PersonAddOutlined,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

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

function StyledIcons(Icon) {
  return <Icon sx={{ marginRight: 1, width: '21px' }} />;
}

const pages = [
  { name: 'home', url: '/', role: 'all', icon: StyledIcons(Home) },
  { name: 'upload', url: '/upload', role: 'user', icon: StyledIcons(CloudUpload) },
  { name: 'requests', url: '/requests', role: 'admin', icon: StyledIcons(CloudDownload) },
  { name: 'fórum', url: '/forum', role: 'user', icon: StyledIcons(Forum) },
  { name: 'contato', url: '/contato', role: 'all', icon: StyledIcons(MailOutline) },
];

function ResponsiveAppBar() {
  const { isAuthenticated, logout } = useAuth();

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
            {pages.filter(page => !isAuthenticated ? page.role !== 'admin' : page).map((page) => (
              <NavLinkMenu
                key={page.name}
                to={page.url}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#0045AF' : '',
                })}
              >
                {page.icon}
                {page.name.toUpperCase()}
              </NavLinkMenu>
            ))}
          </StyledBox>
          {!isAuthenticated ? (
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
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Avatar
                src="https://super.abril.com.br/wp-content/uploads/2018/07/5281183b865be245b1000225gorila.jpeg?quality=70&w=720&crop=1"
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 2,
                  cursor: 'pointer'
                }}
                component={NavLink}
                to='/perfil'
              />
              <Button color='inherit' sx={{ fontSize: 12, fontFamily: 'Roboto' }} onClick={logout}>
                <Logout sx={{ marginRight: 1, width: '18px' }} />
                SAIR
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
