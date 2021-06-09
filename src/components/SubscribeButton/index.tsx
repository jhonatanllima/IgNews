import { useSession, signIn } from 'next-auth/client'

import * as S from './styles'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [sesion] = useSession();

  function handleSubscribe() {
    if (!sesion) {
      signIn('github')
      return
    }

    // criar a checkout session
  }

  return (
    <S.Container type="button" onClick={handleSubscribe}>
      Subscribe now
    </S.Container>
  )
}