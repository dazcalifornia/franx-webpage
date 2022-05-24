import '../styles/globals.css'
import Head from "next/head";
import Navbar from '../components/nav'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Supakit Wiwustrinon</title>
        <meta name="description" content="Just Franx Portfolio" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
  
}

export default MyApp
