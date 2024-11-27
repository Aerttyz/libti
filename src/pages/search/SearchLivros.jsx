import * as React from 'react';
import { styled } from '@mui/material';
import CardBook from '../../components/search/CardBook';

const ContainerSearch = styled('div')(({ theme }) => ({
  minHeight: '100%',
  gap: '20px',
  padding: '20px',
  width: '90%',
  justifySelf: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function SearchLivros() {
  return (
    <ContainerSearch>
      <CardBook />
    </ContainerSearch>
  );
}