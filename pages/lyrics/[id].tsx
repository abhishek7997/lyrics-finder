import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const temp_url = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get'
const NOT_AVAILABLE = 'Data not available'
const TextStyles = {
    mt: 1,
    mb: 1
} as const

const BoxStyles = { bgcolor: '#ededff', padding: '2rem 4rem', minHeight: '100vh' } as const
const ContainerStyles = { display: 'flex', alignItems: 'center', justifyContent: 'center' } as const

const LyricsPage: FC<any> = ({ lyrics, songDetails }) => {
    return (
        <Container sx={ContainerStyles}>
            <Box sx={BoxStyles}>
                <Divider textAlign="left"><Chip label="TRACK" /></Divider>
                <Typography sx={TextStyles} variant="h4" gutterBottom component="div">
                    {songDetails.songName}
                </Typography>
                <Divider textAlign="left"><Chip label="ALBUM" /></Divider>
                <Typography sx={TextStyles} variant="h6" gutterBottom component="div">
                    {songDetails.albumName}
                </Typography>
                <Divider textAlign="left"><Chip label="ARTIST" /></Divider>
                <Typography sx={TextStyles} variant="h6" gutterBottom component="div">
                    {songDetails.artistName}
                </Typography>
                <Divider variant="middle"><Chip label="LYRICS" /></Divider>
                <Typography sx={TextStyles} variant="body1" gutterBottom>
                    {lyrics.lyrics_body}
                </Typography>
            </Box>
        </Container >
    )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const url = `${temp_url}?track_id=${context.query.track_id ?? ''}&f_has_lyrics=true&apikey=${API_KEY}`
    const request = await fetch(url).then(res => res.json())
    return {
        props: {
            lyrics: request.message.body.lyrics ?? 'Nothing found',
            songDetails: { 'songName': context.query.track_name ?? NOT_AVAILABLE, 'albumName': context.query.album_name ?? NOT_AVAILABLE, 'artistName': context.query.artist_name ?? NOT_AVAILABLE }
        }
    }
}

export default LyricsPage