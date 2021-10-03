import React, { FC } from "react"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'

interface Props {
    results: Array<Map<string, Map<string, string>>>
}

type Track = {
    track: Map<string, Map<string, string>>
}

const CardStyles = {
    border: "1px solid black",
    padding: "0 0 0 16px"
} as const

const Results: FC<any> = ({ results }: Props) => {
    const router = useRouter()
    const handleClick = ({ track }: any) => {
        router.push(`lyrics/${track.track_id}/?track_id=${track.track_id}&track_name=${track.track_name}&album_name=${track.album_name}&artist_name=${track.artist_name}`)
    }

    return (
        <>

            <Container maxWidth="100vw">
                <Typography variant="h4" gutterBottom component="div">Results</Typography>
                <Grid container sx={{ width: "100vw", alignItems: "stretch" }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {results && results.map((track: any) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={track.track.track_id}>
                                <Card sx={CardStyles} onClick={() => handleClick(track)}>
                                    <p>Track: {track.track.track_name}</p>
                                    <p>Artist: {track.track.artist_name}</p>
                                    <p>Album: {track.track.album_name}</p>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Results
