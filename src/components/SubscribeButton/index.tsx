import { useSession, signIn } from 'next-auth/client'

import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import * as S from './styles'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [sesion] = useSession();

  async function handleSubscribe() {
    if (!sesion) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <S.Container type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Container>
  )
}