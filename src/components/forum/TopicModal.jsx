import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: { xs: "70%", sm: "30%" },
  height: { xs: "50%", sm: "45%" },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #013A93",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const StyledForm = styled("form")(({}) => ({
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

export default function TopicModal({ open, handleClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value || e.target.content.value) {
      toast.success("Tópico criado com sucesso!");
    } else {
      toast.warn("Preencha todos os campos!");
    }
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <StyledForm onSubmit={handleSubmit}>
          <Box display="flex">
            <Typography
              variant="h6"
              sx={{
                color: "#013A93",
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Criar Tópico
            </Typography>
            <CloseIcon
              sx={{
                ml: "auto",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </Box>
          <TextField
            id="title"
            label="Título"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="content"
            label="Conteúdo"
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              mt: 2,
            }}
          >
            Criar
          </Button>
        </StyledForm>
      </Box>
    </Modal>
  );
}
