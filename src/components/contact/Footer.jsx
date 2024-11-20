import * as React from 'react';
import { styled, Grid2 as Grid } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const StyledFooter = styled('footer')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#013A93',
  color: 'white',
}));

const StyledLink = styled('a')(() => ({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    color: '#6899E6',
  }
}));

export default function Footer() {
  return (
    <StyledFooter>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 12 } }}>
        <Grid item m={3}>
          <StyledLink href="https://github.com/Dags0n/libti" target='_blank'>
            <GitHub sx={{ mb: '12px' }} />
            Repositório
          </StyledLink>
        </Grid>
        <Grid item m={3} sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LinkedIn sx={{ mb: '12px' }} />
          <StyledLink href='https://github.com/Aerttyz' target='_blank'>Alesandro Alex</StyledLink>
          <StyledLink href='https://github.com/Dags0n' target='_blank'>Dagson Gabriel</StyledLink>
          <StyledLink href='https://github.com/eriksmedeiros' target='_blank'>Erik Medeiros</StyledLink>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}