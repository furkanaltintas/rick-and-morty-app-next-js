import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgba(160, 160, 160, 0.57)' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* Logo */}
              <Typography
                variant="h6"
                component={Link}
                href="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  fontFamily: "Get Schwifty, sans-serif", // Eğer özel font yüklüyse
                }}
              >
                Rick and Morty
              </Typography>
    
              {/* Links */}
              <Box sx={{ display: "flex", gap: 2 }}>
              <Button sx={{ fontWeight:'bold' }} color="inherit" component={Link} href="/characters">
                  Characters
                </Button>
                <Button sx={{ fontWeight:'bold' }} color="inherit" component={Link} href="/episodes">
                  Episodes
                </Button>
                <Button sx={{ fontWeight:'bold' }} color="inherit" component={Link} href="/about">
                  About
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
}
