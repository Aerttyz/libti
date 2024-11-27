import * as React from 'react';
import { styled, Grid2 as Grid } from '@mui/material';
import Filtro from '../../components/search/Filter';
import ButtonSearch from '../../components/search/ButtonSearch';
import { Outlet } from 'react-router-dom';

const ContainerSearch = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 64px)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 56px)',
  },
}));

export default function Search() {
  return (
    <ContainerSearch>
      <Grid container>
        <Grid item size={{ xs: 12, sm: 3 }} sx={{ height: { xs: '100%', sm: 'calc(100vh - 64px)' }, display: 'flex', justifyContent: 'center', m: { xs: '30px 0', sm: '0' } }}>
          <Filtro />
        </Grid>
        <Grid item size={{ xs: 12, sm: 9 }}>
          <ButtonSearch />
          <Outlet />
        </Grid>
      </Grid>
    </ContainerSearch>
  );
}