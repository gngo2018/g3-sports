import { createContext, useContext, useState } from 'react'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuestion, faWeight, faDumbbell, faRuler, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { MyGlobalContext } from '../context/MyGlobalContext'
import MobileMenu from '../components/mobilemenu/MobileMenu'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import '../styles/globals.css'

library.add(fab, faQuestion, faWeight, faDumbbell, faRuler, faTimesCircle)

function MyApp({ Component, pageProps }: AppProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  
  return (
    <MyGlobalContext.Provider value= {{ menuIsOpen, setMenuIsOpen }}>
      <Header />
      {
        menuIsOpen && <MobileMenu />
      }
      <Component {...pageProps} />
      <Footer />
    </MyGlobalContext.Provider>
  )
}

export default MyApp
