import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import * as S from './styles'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <S.Container type="button">
      <FaGithub color='#04D361' />
       Jhonatan Lima
      <FiX color='#737380' />
    </S.Container>
  ) : (
    <S.Container type="button">
      <FaGithub color='#eba417' />
       Sign in with Github
    </S.Container>
  )
}