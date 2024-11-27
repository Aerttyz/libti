import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Grid2 } from "@mui/material";
import { MenuBook } from "@mui/icons-material";

const ButtonDisciplinas = styled(Button)(({ theme }) => ({
  backgroundColor: "#013A93",
  color: "white",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    height: '150px',
    width: '220px',
    fontSize: 20,
    borderRadius: 12,
  },
  [theme.breakpoints.down("sm")]: {
    height: '100px',
    width: '120px',
    fontSize: 10,
    borderRadius: 6,
  },
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
    backgroundColor: 'blue',
  },
}));

const TitleButton = styled(Typography)(({ theme }) => ({
  color: "white",
  marginBottom: 20,
  fontFamily: "Roboto",
  [theme.breakpoints.up("sm")]: {
    fontSize: 15,
    marginBottom: 20,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    marginBottom: 3,
  },
}));

const SubTitleButton = styled(Typography)(({ theme }) => ({
  color: "white",
  opacity: 0.7,
  fontFamily: "Roboto",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    fontSize: 12,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 7,
  },
}));

const style = {
  width: "80%",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  marginTop: { xs: "20%", sm: "8%" },
  backgroundColor: "white",
  border: "1px solid #013A93",
  borderRadius: 5,
  boxShadow: 24,
  p: 6,
  overflow: "auto",
  position: "relative",
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Chrome, Safari e Edge
  },
};

const cardStyle = {
  border: "1px solid #013A93",
  borderRadius: 5,
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 2,
  width: { xs: "90%", sm: "70%" },
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
  },
};

const data = [
  { semestre: "2024.2", professor: "ITAMIR DE MORAIS BARROCA FILHO" },
  { semestre: "2024.2", professor: "JANIHERYSON FELIPE DE OLIVEIRA" },
  { semestre: "2024.1", professor: "JANIHERYSON FELIPE DE OLIVEIRA" },
  { semestre: "2024.1", professor: "JEAN MARIO MOREIRA DE LIMA" },
  { semestre: "2020.2", professor: "NELSON ION DE OLIVEIRA" },
  { semestre: "2019.2", professor: "ANNA GISELLE CAMARA DANTAS" },
];

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <Grid2 container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Matemática Elementar
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>
        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Desenvolvimento Web I
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>

        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Banco de Dados
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>

        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Fundamentos Matemáticos da Computação I
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>

        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Rede de Computadores
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>

        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Arquitetura de Computadores
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>

        <Grid2>
          <ButtonDisciplinas
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <TitleButton variant="h6">
              Linguagem de Programação II
            </TitleButton>
            <SubTitleButton >
              Ver mais <MenuBook sx={{ height: { xs: '10px', sm: '15px' } }} />
            </SubTitleButton>
          </ButtonDisciplinas>
        </Grid2>
      </Grid2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              color: "#013A93",
              fontSize: { xs: 20, sm: 30 },
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 3,
            }}
          >
            Desenvolvimento Web 1
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "black",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Grid2 container spacing={2}>
            {data.map((item, index) => (
              <Grid2
                item
                size={{ xs: 12, sm: 6 }}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Card sx={cardStyle}>
                  <CardContent>
                    <Typography variant="body1">
                      <strong>Semestre:</strong> {item.semestre}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      <strong>Professor:</strong> {item.professor}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Modal>
    </div>
  );
}
