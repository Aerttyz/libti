import * as React from 'react';
import { Grid2 as Grid, styled, Typography } from '@mui/material';
import BibliotecaMovel from '../../assets/login/biblioteca-movel.png';
import { FormLogin } from '../../components/forms/FormAuth';

const ContainerLogin = styled('div')(() => ({
  height: 'calc(100vh - 64px)',
}));

const DivImagem = styled('div')(() => ({
  backgroundColor: '#013A93',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '90%',
}));

const Title = styled('Typography')(() => ({
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: 36,
}));

const SubTitle = styled('Typography')(() => ({
  color: '#6899E6',
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: 20,
  marginBottom: '40px',
}));

export default function Login() {
  return (
    <ContainerLogin>
      <Grid
        container
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Grid
          size={6.5}
          sx={{
            height: '100%',
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            backgroundColor: '#013A93'
          }}
        >
          <DivImagem>
            <Title variant="h6">Bem vindo(a) ao LIBTI!</Title>
            <SubTitle variant="h6">Realize seu login para ter acesso a funcionalidades extras.</SubTitle>
            <img src={BibliotecaMovel} alt="Logo LIBTI" style={{ width: '200px' }} />
          </DivImagem>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 5.5 }}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <FormLogin
            title='Fazer Login'
            fields={['Email', 'Senha']}
            login={true}
          />
          <Typography
            variant="h6"
            sx={{
              color: '#6899E6',
              fontFamily: 'Roboto',
              fontSize: 14,
            }}
          >
            Ainda não tem conta? <a href="/cadastro" style={{ color: '#013A93', textDecoration: 'none' }}>Crie uma conta</a>
          </Typography>
        </Grid>
      </Grid>
    </ContainerLogin>
  );
}