import React from "react";
import { Container, Typography, Box, Button, TextField, Paper, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faComment } from "@fortawesome/free-solid-svg-icons";

const posts = [
  { id: 1, text: "Alguém tem disponível o livro de vga? Aquele do Jacir Venturi", date: "07/04/2025 21:37", comments: 0, votes: 1 },
  { id: 2, text: "Se alguém tiver algum material de desenvolvimento web 1, se puder disponibilizar aqui fico agradecida!!", date: "21/03/2025 08:41", comments: 1, votes: 4 },
];

const Forum = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">Criar Novo Tópico</Typography>
        <Button variant="contained" color="primary">+</Button>
      </Box>

      {posts.map((post) => (
        <Paper key={post.id} sx={{ padding: 2, marginBottom: 2 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">{post.text}</Typography>
            <Typography variant="caption" color="text.secondary">{post.date}</Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={1}>
            <IconButton>
              <FontAwesomeIcon icon={faArrowUp} />
            </IconButton>
            <Typography variant="body2" sx={{ mx: 1 }}>{post.votes}</Typography>
            <IconButton>
              <FontAwesomeIcon icon={faArrowDown} />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={faComment} />
            </IconButton>
            <Typography variant="body2">{post.comments} Comentários</Typography>
          </Box>

          {post.comments > 0 && (
            <Box mt={2}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Comentar..."
              />
            </Box>
          )}
        </Paper>
      ))}
    </Container>
  );
};

export default Forum;
