import { AppProps } from 'next/app'

import GlobalStyle from '../styles/GobalStyle'

import {
  SEO
} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="ig.news"
        description="Primeiro projeto next do curso Ignite da RocketSeat!"
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
