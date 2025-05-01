import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: 'About - Rick and Morty App'
};

export default function About() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="93vh"
    >
      <Card sx={{ maxWidth: 900, width: '100%', textAlign: 'center', p: 2 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About
          </Typography>
          <Typography variant="body1">
            The Rick and Morty API is a REST(ish) and GraphQL API based on the
            television show Rick and Morty. You will have access to about hundreds of characters,
            images, locations and episodes. The Rick and Morty API is filled with canonical
            information as seen on the TV show.
          </Typography>
          <Button
            component={Link}
            variant="outlined"
            sx={{
              display: 'flex',
              marginTop: "20px"
            }}
            href={"/about/team"}>Team</Button>
        </CardContent>
      </Card>
    </Box>
  );
}
