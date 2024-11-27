import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard(props) {
  return (
    <Card
      sx={{
        width: { xs: 100, sm: 200 }, // Largura do card
        height: { xs: "100%", sm: "100%" }, // Altura do card
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <CardActionArea
        >
        <CardMedia
          component="img"
          height= {{xs: '100', sm: '200'}} // Altura da imagem
          image={props.book.image || "https://m.media-amazon.com/images/I/71stxGw9JgL._SL1500_.jpg"}
          alt={props.book.title}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 1, // Reduz padding para economizar espaço
            height: 'calc(100% - 200px)', // Ajusta altura dinâmica do conteúdo
          }}
        >
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              fontSize: 12, // Fonte menor para caber no espaço
              fontWeight: 'bold',
              color: '#000000',
              textAlign: 'center',
              overflow: 'hidden', // Previne texto de sair do card
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap', // Trunca texto longo
            }}
          >
            {props.book.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: 10, // Fonte menor para o autor
              color: '#555555',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap', // Trunca texto longo
            }}
          >
            {props.book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
