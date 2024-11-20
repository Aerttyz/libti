import React from 'react';
import { styled, Typography } from '@mui/material';
import HomeBG from '../../assets/home/home-bg.png';
import SearchButton from '../../components/home/SearchButton';

const DivBackground = styled('div')(({ theme }) => ({
  backgroundImage: `url(${HomeBG})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '150%',
    height: 'calc(100vh - 56px)',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundSize: '100%',
    height: 'calc(100vh - 64px)',
  },
  [theme.breakpoints.up('md')]: {
    backgroundSize: '80%',
  },
}));

const StyledDiv = styled('div')(() => ({
  height: '100%',
  width: '100%',
}));

function Home() {
  return (
    <DivBackground>
      <StyledDiv>
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 82,
            fontWeight: 1000,
            WebkitTextStroke: '1px #013A93',
            display: { xs: 'block', sm: 'block' },
            alignSelf: 'center',
            textAlign: 'center',
            paddingTop: { xs: '10%', sm: '5%' },
          }}
        >
          LIB<span style={{ color: '#013A93', WebkitTextStroke: '1px white' }}>TI</span>
        </Typography>
        <SearchButton />
      </StyledDiv>
    </DivBackground>
  );
}

export default Home;
