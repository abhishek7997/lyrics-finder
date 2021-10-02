import React, { ReactElement } from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    results: any
}

const CardStyles = {
    border: "1px solid black",
}

export default function Results({ results }: Props): ReactElement {
    console.log("Results Length :", results.length)
    return (
        <>
            <h1>Results</h1>
            <Box sx={{ width: '100%', flexGrow: 1 }}>
                <Grid container sx={{ width: "80vw", alignItems: "stretch", justifyContent: "center" }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {results && results.map(track => {
                        // console.log(track)
                        return (
                            <Grid item xs={4} lg={2} key={track.track.track_id}>

                                <Card sx={CardStyles}>

                                    <p>{track.track.track_name}</p>
                                    <p>{track.track.artist_name}</p>
                                    <p>{track.track.album_name}</p>

                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}
