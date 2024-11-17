import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Typography, Box, Divider, Grid2 as Grid } from '@mui/material';
import { faBookSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormTextField(label) {
  return (
    <Box sx={{ width: 500, maxWidth: { xs: '80%', md: '65%' }, marginBottom: 2 }}>
      <StyledTextField fullWidth size='small' label={label} id={label} required />
    </Box>
  );
}

function OuDivider() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" my={2}>
      <Divider sx={{ width: '100%', backgroundColor: 'lightblue' }} />
      <Typography sx={{ mx: 2, color: "#6899E6" }}>ou</Typography>
      <Divider sx={{ width: '100%', backgroundColor: 'lightblue' }} />
    </Box>
  );
}

const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputLabel-root': {
    color: '#6899E6',
    fontFamily: 'Roboto',
    '&.Mui-focused': {
      color: '#013A93',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6899E6',
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#013A93',
    },
  },
}));


const DivForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '90%',
}));

const StyledForm = styled('form')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledSubmit = styled('input')(({ theme }) => ({
  height: '40px',
  border: 'none',
  borderRadius: '14px',
  backgroundColor: '#013A93',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: 14,
  fontWeight: 900,
  padding: '12px',
  marginTop: '15px',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '65%',
  },
  ':hover': {
    backgroundColor: 'blue',
    transform: 'scale(1.05)',
    transition: 'all 0.3s',
  }
}));

export function FormLogin(props) {
  return (
    <DivForm>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Roboto',
          fontSize: 18,
          fontWeight: 1000,
          marginBottom: '55px',
          color: '#013A93'
        }}
      >
        {props.title.toUpperCase()}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Roboto',
          fontSize: 14,
          fontWeight: 1000,
          marginBottom: '20px',
          color: '#013A93',
          width: { xs: '80%', md: '65%' },
        }}
      >
        <FontAwesomeIcon icon={faBookSkull} style={{ marginRight: '10px' }} />LIBTI
      </Typography>
      <StyledForm method='post' action={props.url}>
        {props.fields.map((field) => FormTextField(field))}
        <StyledSubmit type='submit' value={props.title} />
        {props.login && (
          <Grid container sx={{ width: { xs: '80%', sm: '90%', md: '65%' }, mt: '20px' }}>
            <input type='checkbox' id='remember' />
            <Typography
              variant="h6"
              component="label"
              htmlFor='remember'
              sx={{
                color: '#012A93',
                fontSize: '12px',
                mr: 'auto'
              }}
            >
              Lembrar de mim
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href='/esqueceu-senha'
              sx={{
                color: '#012A93',
                fontSize: '12px',
                textDecoration: 'none'
              }}
            >
              Esqueceu a senha?
            </Typography>
          </Grid>
        )}
        <Box sx={{ width: { xs: '30%', md: '25%' }, marginBottom: 2 }}>
          <OuDivider />
        </Box>
      </StyledForm>
    </DivForm>
  );
}