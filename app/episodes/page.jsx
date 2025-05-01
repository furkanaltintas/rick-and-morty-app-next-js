"use client"
import Link from "next/link";
import { BsFillCalendarCheckFill, BsFillCalendar2EventFill } from 'react-icons/bs';
import moment from "moment";
import 'moment/locale/tr'
import { useEffect, useState } from "react";
import { Box, Card, CardActionArea, CardContent, Pagination, Skeleton, Stack, Typography } from "@mui/material";

export default function Episodes() {
    const [page, setPage] = useState(1);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getEpisodes = async (page) => {
            const res = await fetch('https://rickandmortyapi.com/api/episode?page=' + page);
            const data = await res.json();
            setEpisodes(data);
            if (page > 1) await new Promise(res => setTimeout(res, 1000));
            setLoading(false);
        }
        getEpisodes(page);
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
                        Array.from(new Array(episodes.length)).map((_, index) => (
                            <Card key={index}>
                                <Skeleton variant="rectangular" height={140} />
                                <CardContent>
                                    <Skeleton width="60%" />
                                    <Skeleton width="40%" />
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        episodes.results?.map((episode) => (
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
                                key={episode.id}>
                                <CardActionArea component={Link} href={`/episodes/${episode.id}`}>
                                    <CardContent sx={{ height: '100%' }}>
                                        <Typography gutterBottom variant="h6" component="div" fontWeight={"bold"}>
                                            {episode.name} - {episode.episode}
                                        </Typography>
                                        <Typography>
                                            <span className="date">
                                                <BsFillCalendarCheckFill /> {moment(episode.air_date).format('D MMMM YYYY')}
                                            </span>
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span className="created-date">
                                                <BsFillCalendar2EventFill /> {moment(episode.created).format('D MMMM YYYY')}
                                            </span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    )
                }
            </Box>

            {
                episodes.info && (
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
                            count={episodes.info.pages}
                            page={page}
                            onChange={handleChange} />
                    </Stack>
                )
            }
        </>
    );
}
