import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const initialPosts = [
  {
    id: 1,
    text: "Alguém tem disponível o livro de vga? Aquele do Jacir Venturi",
    date: "07/04/2025 21:37",
    comments: 0,
    votes: 1,
  },
  {
    id: 2,
    text: "Se alguém tiver algum material de desenvolvimento web 1, se puder disponibilizar aqui fico agradecida!!",
    date: "21/03/2025 08:41",
    comments: 1,
    votes: 4,
  },
];

const Users = [
  {
    id: 1,
    name: "João",
    date: "07/04/2025 21:37",
  },
];

const ButtonNewTopic = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #013A93",
  padding: "10px",
  marginBottom: "16px",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#e0e0e0",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.01)",
  },
  cursor: "pointer",
}));
export default function Forum() {
  const [posts, setPosts] = useState(initialPosts);
  const [visibleComments, setVisibleComments] = useState({});
  const [visibleText, setVisibleText] = useState({});
  const handleUpvote = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, votes: post.votes + 1 } : post
      )
    );
  };
  const handleDownvote = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id && post.votes > 0
          ? { ...post, votes: post.votes - 1 }
          : post
      )
    );
  };
  const handleComentShow = (id) => {
    setVisibleComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTextShow = (id) => {
    setVisibleText((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <ButtonNewTopic>
        <Typography variant="body" sx={{ color: "#013A93" }}>
          Criar Novo Tópico
        </Typography>
        <SendIcon color="primary"></SendIcon>
      </ButtonNewTopic>
      {posts.map((post) => (
        <Paper
          key={post.id}
          sx={{
            padding: 2,
            marginBottom: 2,
            border: "1px solid #013A93",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box display="flex" flexDirection="column">
            <Box display="flex">
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                mt={1}
              >
                <IconButton
                  color="primary"
                  onClick={() => handleUpvote(post.id)}
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 1 }}>
                  {post.votes}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={() => handleDownvote(post.id)}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="caption" color="primary" ml={2}>
                  {post.date}
                </Typography>
                <Typography
                  variant="body1"
                  ml={2}
                  sx={{
                    color: "#013A93",
                    fontWeight: "bold",
                  }}
                >
                  {post.text}
                </Typography>
                <Box display="flex" alignItems="center" mt={2} ml={2} gap={2}>
                  <Box display="flex">
                    <IconButton>
                      <ChatBubbleOutlineIcon color="primary" onClick={() => handleTextShow(post.id)}/>

                      <Typography variant="body2" color="primary">
                        {post.comments}
                      </Typography>
                    </IconButton>
                  </Box>
                  <IconButton>
                  <ReportGmailerrorredIcon color="primary" />
                  </IconButton>
                </Box>
              </Box>
              {visibleComments[post.id] && post.comments > 0 ? (
                <KeyboardArrowUpIcon
                  sx={{
                    ml: "auto",
                    mt: "auto",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.01)",
                    },
                    display: "flex",
                  }}
                  onClick={() => handleComentShow(post.id)}
                  color="primary"
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: "auto",
                    mt: "auto",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.01)",
                    },
                    display: "flex",
                  }}
                  onClick={() => handleComentShow(post.id)}
                  color="primary"
                />
              )}
            </Box>
            <Box>
              {visibleComments[post.id] && post.comments > 0 && (
                <>
                  <Box
                    sx={{
                      border: "1px solid #013A93",
                      borderRadius: 2,
                      padding: 1,
                      marginTop: 4,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box display="flex">
                      <Avatar
                        src="https://super.abril.com.br/wp-content/uploads/2018/07/5281183b865be245b1000225gorila.jpeg?quality=70&w=720&crop=1"
                        sx={{
                          width: 15,
                          height: 15,
                          marginRight: 1,
                          ml: 1,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#013A93",
                          fontWeight: "bold",
                        }}
                      >
                        {Users.find((user) => user.id === 1).name}
                      </Typography>
                      <Typography
                        color="primary"
                        variant="caption"
                        sx={{
                          ml: 1,
                        }}
                      >
                        {Users.find((user) => user.id === 1).date}
                      </Typography>
                      <ReportGmailerrorredIcon
                        color="primary"
                        sx={{
                          ml: "auto",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#e0e0e0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            transform: "scale(1.01)",
                          },
                        }}
                      />
                    </Box>
                    <Box mt={1} ml={2}>
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          color: "#013A93",
                        }}
                      >
                        Comentário teste
                      </Typography>
                    </Box>
                  </Box>
                </>
              )}
              {visibleText[post.id] && (
                    <Box
                      mt={2}
                      sx={{
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Comentar..."
                        InputProps={{
                          endAdornment: (
                            <IconButton>
                              <SendIcon color="primary" />
                            </IconButton>
                          ),
                        }}
                      />
                    </Box>
                  )}
            </Box>
          </Box>
        </Paper>
      ))}
    </Container>
  );
}
