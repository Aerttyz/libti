import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormContact from '../../components/contact/FormContact';
import Footer from '../../components/contact/Footer';

const StyledDiv = styled('div')(({ theme }) => ({
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

export default function Contact() {
  return (
    <>
      <StyledDiv>
        <FormContact />
      </StyledDiv>
      <Footer />
    </>
  );
}