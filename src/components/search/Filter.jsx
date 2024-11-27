import * as React from 'react';
import { styled, Typography } from '@mui/material';
import RadioFilter from './RadioFilter';

const DivFiltro = styled('div')(({ theme }) => ({
  borderRadius: 12,
  border: '1px solid #6899E6',
  display: 'flex',
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    height: '50%',
    width: '80%',
    marginTop: 100,
  },
  [theme.breakpoints.down('sm')]: {
    height: '30%',
    width: '60%',
    marginTop: 0,
  },
}));

const StyledTypography = styled(Typography)({
  color: '#013A93',
  fontSize: 18,
  marginBottom: 20,
});

export default function Filtro() {
  return (
    <DivFiltro>
      <StyledTypography variant="h5">Pesquisar por:</StyledTypography>
      <RadioFilter />
    </DivFiltro>
  );
}