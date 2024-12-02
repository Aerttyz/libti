import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Box, Grid2 as Grid } from '@mui/material';
import InputFile from './InputFile';

function FormTextField(label, type, required) {
  if (type === 'file') {
    return <InputFile label={label} />;
  }
  return (
    <Box sx={{ width: '100%', marginBottom: 3 }}>
      <StyledTextField fullWidth type={type} label={label} id={label} required={required} />
    </Box>
  );
}

const DivForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '90%',
  margin: '30px 0',
}));

const ContainerUploadForm = styled('div')(() => ({
  backgroundColor: '#ffffff',
  padding: '20px',
  border: '1px solid #6899E6',
  borderRadius: '10px',
  width: '80vw',
}));

const StyledForm = styled('form')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputLabel-root': {
    color: '#6899E6',
    fontFamily: 'Roboto',
    transform: 'translate(14px, 14px)',
    transition: 'all 0.2s ease-out',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
      color: '#013A93',
    },
  },
  '& .MuiOutlinedInput-root': {
    height: '50px',
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
  '& .MuiOutlinedInput-input': {
    padding: '14px',
  },
}));

const StyledSubmit = styled('input')(() => ({
  height: '40px',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#013A93',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: 14,
  fontWeight: 900,
  padding: '12px',
  marginTop: '15px',
  cursor: 'pointer',
  width: '100%',
  ':hover': {
    backgroundColor: 'blue',
    transform: 'scale(1.02)',
    transition: 'all 0.3s',
  }
}));

export function FormUpload({ fields }) {
  return (
    <DivForm>
      <ContainerUploadForm>
        <Grid container>
          <StyledForm method='post' action='/upload'>
            {fields.map((field) => FormTextField(field.label, field.type, field.required))}
            <StyledSubmit type='submit' value='Enviar Requisição' />
          </StyledForm>
        </Grid>
      </ContainerUploadForm>
    </DivForm>
  );
}