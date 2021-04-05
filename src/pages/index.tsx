import { GetStaticProps } from 'next'

import { stripe } from '../services/stripe'
import { formatPrice } from '../functions/formaPrice'

import * as S from '../styles/pages/index'

import {
  SubscribeButton
} from '../components'

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <S.Container>
      <section>
        <span>👏 Hey, welcome! </span>
        <h1>News about <br /> the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>

      <img src="/images/avatar.svg" alt="Girl Coding" />
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Icj5ZLRcpFHlWSmi6S32cGi')

  const product = {
    priceId: price.id,
    amount: formatPrice((price.unit_amount / 100)),
  }

  return {
    props: {
      product
    },

    revalidate: 60 * 60 * 24, //24 hours
  }
}
