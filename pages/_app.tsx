import type { AppProps } from 'next/app'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
