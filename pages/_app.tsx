import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuestion, faWeight, faDumbbell, faRuler } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import '../styles/globals.css'

library.add(fab, faQuestion, faWeight, faDumbbell, faRuler)

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
