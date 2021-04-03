import { AppProps } from 'next/app'

import GlobalStyle from '../styles/GobalStyle'

import {
  SEO,
  Header
} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <SEO
        title="ig.news"
        description="Primeiro projeto next do curso Ignite da RocketSeat!"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
