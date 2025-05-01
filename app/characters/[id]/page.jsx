import { characterStatus } from "@/app/services/characterStatus";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Pagination, Stack, Typography } from "@mui/material";
import Link from "next/link";

async function getCharacter(id) {
  await new Promise(res => setTimeout(res, 3000));

  const res = await fetch("https://rickandmortyapi.com/api/character/" + id);
  const character = res.json();
  return character;
}

export default async function CharacterDetail({ params }) {

  const character = await getCharacter(params.id);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "93vh",
    }}>
      <Card
        sx={{
          display: "flex",
          maxWidth: 700,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Örnek shadow
          borderRadius: 2, // Köşeleri yumuşatma
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            transform: "translateY(-5px)",
          },
        }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={character.image}
          alt={character.name}
        />

        <Box
          sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {characterStatus(character.status)} {character.species} - {character.status}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Gender: {character.gender}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Origin: {character.origin.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Location: {character.location.name}
            </Typography>
            <Typography variant="body2">
              <Button
                component={Link}
                variant="text"
                sx={{
                  display: 'flex',
                  float: 'right',
                  marginTop: "100px"
                }}
                href="/">Geri Dön</Button>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}
