import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function createData(codigo, disciplina, userEnvio) {
  return {
    codigo,
    disciplina,
    userEnvio,
    informacoes: [
      {
        data: '2020-01-05',
        professor: 'Itamir de Morais Barroca Filho',
        link: 'drive.google.com/web1_2021.1',
        semestre: '2021.1',
      },
      {
        data: '2020-01-02',
        professor: 'Janiheryson Felipe de Oliveira Martins',
        link: 'drive.google.com/web1_2021.1',
        semestre: '2023.1',
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.codigo}
        </TableCell>
        <TableCell>{row.disciplina}</TableCell>
        <TableCell>{row.userEnvio}</TableCell>
        <TableCell><a href='/aceitar:codigo'><FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green', height: '25px' }} /></a></TableCell>
        <TableCell><a href='/recusar:codigo'><FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red', height: '25px' }} /></a></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Informações
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Professor</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell>Semestre</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.informacoes.map((info) => (
                    <TableRow key={info.data}>
                      <TableCell component="th" scope="row">
                        {info.data}
                      </TableCell>
                      <TableCell>{info.professor}</TableCell>
                      <TableCell>{info.link}</TableCell>
                      <TableCell>{info.semestre}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    codigo: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    userEnvio: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        professor: PropTypes.string.isRequired,
        semestre: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('IMD0001', 'Desenvolvimento Web 1', 'UserAluno1'),
  createData('IMD0002', 'Desenvolvimento Web 2', 'UserAluno2'),
  createData('IMD0003', 'Matemática Elementar', 'UserAluno3'),
  createData('IMD0004', 'Sistemas Operacionais', 'UserAluno4'),
  createData('IMD0005', 'Banco de Dados', 'UserAluno5'),
];

export default function CardRequests() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 4, borderRadius: '10px' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Código</TableCell>
            <TableCell>Disciplina</TableCell>
            <TableCell>Enviado por</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.nome} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
