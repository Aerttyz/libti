import * as React from 'react';
import { Grid2 as Grid, styled, Typography } from '@mui/material';
import { FormUpload } from '../../components/forms/FormUpload';

const ContainerUpload = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  [theme.breakpoints.up('sm')]: {
    minHeight: 'calc(100vh - 64px)',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 55px)',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto',
  fontWeight: 700,
  letterSpacing: '.1rem',
  color: '#013A93',
  textDecoration: 'none',
  wordWrap: 'nowrap',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
    marginTop: '2rem',
  },
}));

export default function Upload() {
  return (
    <ContainerUpload>
      <Grid container>
        <Grid item size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <StyledTypography variant="h1">UPLOAD</StyledTypography>
        </Grid>
        <Grid item size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormUpload />
        </Grid>
      </Grid>
    </ContainerUpload>
  );
}