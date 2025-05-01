"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Pagination, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { characterStatus } from "../services/characterStatus";

export default function Characters() {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getCharacters = async (page) => {
            const res = await fetch('http://localhost:3000/api/characters?page=' + page);
            const data = await res.json();
            setCharacters(data);
            if (page > 1) await new Promise(res => setTimeout(res, 1000));
            setLoading(false);
        }

        getCharacters(page);
    }, [page]);

    const handleChange = (e, value) => {
        e.preventDefault();
        setPage(value);
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
                    gap: 3,
                    marginTop: "2rem"
                }}>
                {
                    loading ? (
                        Array.from(new Array(characters.results?.length)).map((_, index) => (
                            <Card key={index}>
                                <Skeleton variant="rectangular" height={300} />
                                <CardContent>
                                    <Skeleton width="80%" />
                                    <Skeleton width="60%" />
                                    <Skeleton width="40%" />
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        characters.results?.map((character) => (
                            <Card 
                            sx={{
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Örnek shadow
                                borderRadius: 2, // Köşeleri yumuşatma
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                                  transform: "translateY(-5px)",
                                },
                              }}
                            key={character.id}>
                                <CardActionArea component={Link} href={`/characters/${character.id}`}>
                                    {character.image ? (
                                        <CardMedia
                                            component="img"
                                            image={character.image}
                                            alt={character.name}
                                            sx={{ width: '100%' }}
                                        />
                                    ) : null}
                                    <CardContent sx={{ height: '100%' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {character.name}
                                        </Typography>
                                        <Typography variant="span">{characterStatus(character.status)} {character.status} - {character.species}</Typography>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            textAlign="center"
                                            gap={1}>
                                            <Typography sx={{ color: 'text.secondary' }} variant="span">Location:</Typography>
                                            <Typography variant="span">{character.origin.name}</Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    )
                }
            </Box>

            {
                characters.info && (
                    <Stack sx={{ marginBottom: "20px" }} spacing={2} alignItems="center" mt={4}>
                        <Pagination
                            sx={{
                                "& .css-1jeh93f-MuiButtonBase-root-MuiPaginationItem-root": {
                                    color: "white"
                                },
                                "& .css-8uzxat-MuiSvgIcon-root-MuiPaginationItem-icon": {
                                    fill: "rgb(255 255 255)"
                                }
                            }}
                            color="secondary"
                            count={characters.info.pages}
                            page={page}
                            onChange={handleChange} />
                    </Stack>
                )
            }
        </>
    );
}