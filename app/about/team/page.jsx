import { Box, Card, CardContent, Typography } from "@mui/material"

export const metadata = {
  title: 'Takım - Rick and Morty App'
}

export default function Team() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Card sx={{ maxWidth: 900, width: '100%', textAlign: 'center', p: 2 }}>
      <CardContent>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Team
        </Typography>
        <Typography variant="body1" paragraph>
        We are Axel Fuhrmann, a guy who likes to develop things and Talita, 
        the "Rick and Morty data scientist" and hardcore fan.
        </Typography>
      </CardContent>
    </Card>
  </Box>
  )
}
