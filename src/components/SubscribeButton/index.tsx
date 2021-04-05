import * as S from './styles'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <S.Container type="button">
      Subscribe now
    </S.Container>
  )
}