import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/GobalStyle'

import {
  SEO,
  Header
} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <GlobalStyle />
      <SEO
        title="ig.news"
        description="Primeiro projeto next do curso Ignite da RocketSeat!"
      />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
