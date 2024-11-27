import * as React from 'react';
import { styled } from '@mui/material';
import BasicModal from '../../components/search/OutsideModal';

const ContainerSearch = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  padding: '20px',
  width: '90%',
  justifySelf: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function SearchDisciplinas() {
  return (
    <ContainerSearch>
      <BasicModal />
    </ContainerSearch>
  );
}