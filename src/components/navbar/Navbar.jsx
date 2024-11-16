import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from './sections/Drawer';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  MenuItem, 
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

const StyledAppBar = styled(AppBar)(() => ({
  display: 'block',
  position: 'static',
  backgroundColor: '#013A93',
}));

const MenuButtons = styled(Button)(() => ({
  color: 'white',
  display: 'flex',
  fontFamily: 'Roboto',
  fontSize: 12,
  fontWeight: 100,
  marginRight: 6,
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

const pages = ['Home', 'Upload', 'Requests', 'Fórum', 'Contato'];
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
            <Drawer id="menu-appbar" sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          <StyledTypography variant="h5">
            <a href='/' style={{ textDecoration: 'none', color: 'white' }}>LIB<span style={{ color: '#013A93', WebkitTextStroke: '1px white' }}>TI</span></a>
          </StyledTypography>
          <StyledBox>
            {pages.map((page) => (
              <MenuButtons
                key={page}
              >
                {icons[pages.indexOf(page)]}
                {page}
              </MenuButtons>
            ))}
          </StyledBox>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <StyledButton>
              <Login sx={{ marginRight: 1, width: '18px' }} />
              LOGIN
            </StyledButton>
            <Button color='inherit' sx={{ fontSize: 12, fontFamily: 'Roboto' }}>
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
