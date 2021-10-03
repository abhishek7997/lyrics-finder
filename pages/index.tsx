import React, { FC } from "react";
import Head from 'next/head'
import Results from '../components/Results'
import { GetServerSideProps } from 'next'

type ResultsType = {
  results: Array<Map<string, Map<string, string | React.Key>>> | null
}

const Home: FC<any> = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Lyrics Finder</title>
        <meta name="description" content="Find lyrics of any song" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Results results={results} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const temp_url = 'https://api.musixmatch.com/ws/1.1/track.search'
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = `${temp_url}?q=${context.query.q ?? ''}&f_has_lyrics=true&apikey=${API_KEY}`
  const request = await fetch(url).then(res => res.json())
  return {
    props: {
      results: (request.message.body.track_list as ResultsType) ?? null
    }
  }
}

export default Home