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
import { toast } from 'react-toastify';

function createData(isbn, nomeLivro, userEnvio) {
  return {
    isbn,
    nomeLivro,
    userEnvio,
    informacoes: [
      {
        data: '2020-01-05',
        autor: 'Dagson Gabriel',
        editora: 'Editora 1',
        anoPublicacao: '2021',
        link: 'drive.google.com/web1_2021.1',
      },
      {
        data: '2020-01-02',
        autor: 'Alesandro Alex',
        editora: 'Editora 1',
        anoPublicacao: '2021',
        link: 'drive.google.com/web1_2021.1',
      },
      {
        data: '2020-01-02',
        autor: 'Erik Medeiros',
        editora: 'Editora 1',
        anoPublicacao: '2021',
        link: 'drive.google.com/web1_2021.1',
      },
    ],
  };
}

const handleAcceptRequest = () => {
  toast.success('Request aceito!');
};

const handleRejectRequest = () => {
  toast.success('Request rejeitado!');
};

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
          {row.isbn}
        </TableCell>
        <TableCell>{row.nomeLivro}</TableCell>
        <TableCell>{row.userEnvio}</TableCell>
        <TableCell>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{
              color: 'green',
              height: '25px',
              cursor: 'pointer'
            }}
            onClick={handleAcceptRequest}
          />
        </TableCell>
        <TableCell>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{
              color: 'red',
              height: '25px',
              cursor: 'pointer'
            }}
            onClick={handleRejectRequest}
          />
        </TableCell>
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
                    <TableCell>Autor</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell>Editora</TableCell>
                    <TableCell>Publicação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.informacoes.map((info) => (
                    <TableRow key={info.data}>
                      <TableCell component="th" scope="row">
                        {info.data}
                      </TableCell>
                      <TableCell>{info.autor}</TableCell>
                      <TableCell>{info.link}</TableCell>
                      <TableCell>{info.editora}</TableCell>
                      <TableCell>{info.anoPublicacao}</TableCell>
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
    isbn: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    userEnvio: PropTypes.string.isRequired,
    informacoes: PropTypes.arrayOf(
      PropTypes.shape({
        autor: PropTypes.string.isRequired,
        editora: PropTypes.string.isRequired,
        anoPublicacao: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('978-85-333-0223-4', 'Livro 1', 'user1'),
  createData('978-85-333-0223-5', 'Livro 2', 'user2'),
  createData('978-85-333-0223-6', 'Livro 3', 'user3'),
  createData('978-85-333-0223-7', 'Livro 4', 'user4'),
  createData('978-85-333-0223-8', 'Livro 5', 'user5'),
  createData('978-85-333-0223-9', 'Livro 6', 'user6'),
  createData('978-85-333-0223-10', 'Livro 7', 'user7'),
];

export default function CardRequests() {
  return (
    <TableContainer component={Paper} sx={{ border: '1px solid #6899E6', boxShadow: 4, borderRadius: '10px' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ISBN</TableCell>
            <TableCell>Título</TableCell>
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
