import { AppProps } from 'next/app'

import GlobalStyle from '../styles/GobalStyle'

import {
  SEO
} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
