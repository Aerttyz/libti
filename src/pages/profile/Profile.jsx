import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Avatar, TextField, Button } from "@mui/material";

const StyledForm = styled("form")(() => ({
  width: "100%",
  margin: "10px 0",
  display: "flex",
  flexDirection: "column",
  "& label": {
    color: "#6899E6",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#6899E6",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#013A93",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6899E6",
    },
  },
  "& .MuiInputBase-input": {
    color: "#013A93",
  },
}));

const style = {
  display: { xs: "block", sm: "flex" },
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "center",
  width: { xs: "90%", sm: "70%" },
  margin: "10px auto",
  padding: 2,
  mt: { xs: 2, sm: 10 },
};

export default function Profile() {
  return (
    <Box sx={style}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          borderRadius: 4,
          padding: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            src="https://super.abril.com.br/wp-content/uploads/2018/07/5281183b865be245b1000225gorila.jpeg?quality=70&w=720&crop=1"
            sx={{ width: 100, height: 100 }}
          />
          <Button
            variant="outlined"
            component="label"
            sx={{
              textTransform: "none",
              color: "#013A93",
              borderColor: "#6899E6",
              ":hover": { borderColor: "#013A93" },
              width: "100%",
              margin: "auto 10px",
            }}
          >
            Selecionar Imagem
            <input type="file" accept="image/*" hidden />
          </Button>
        </Box>
        <StyledForm>
          <TextField
            id="name"
            label="Nome"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="content"
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            margin="normal"
          />
        </StyledForm>

        <Button
          variant="outlined"
          sx={{
            bgcolor: "#6899E6",
            color: "white",
          }}
        >
          Salvar Alterações
        </Button>
      </Box>
    </Box>
  );
}
