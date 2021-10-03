import { CssBaseline } from "@mui/material"
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CssBaseline />
    <Navbar />
    <Component {...pageProps} />
  </>
}
export default MyApp
