import react from "react";
import { styled, width } from "@mui/system";
import { Typography } from "@mui/material";
import RoboError from "../../assets/notFound/aaa.png";


const StyledDiv = styled("div")(() => ({

    height: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    }));
const StyledImg = styled("img")(() => ({
    width: "20%",
    }));

export default function NotFound() {
  return (
    <StyledDiv>
         <StyledImg src={RoboError} alt="RoboError"  
         sx={{
            width: { xs: "50%", sm: "20%" },
         }}/>
        <Typography
          variant="h1"
          sx={{
            color: "#013A93",
            fontSize: 50,
            fontWeight: 1000,
            textAlign: "center",
          }}
        >
          Error 404
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#013A93",
            fontSize: { xs: 20, sm: 30 },
            fontWeight: 1000,
            textAlign: "center",
            paddingTop: "1%",
          }}
        >
          Oops... Página não encontrada.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#013A93",
            fontSize: 15,
            fontWeight: 1000,
            textAlign: "center",
            paddingTop: "1%",
          }}
        >
          A página que você está procurando não existe.
        </Typography>
     
      
        
      
    </StyledDiv>
  );
}
