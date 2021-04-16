import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import { signIn, useSession, signOut } from 'next-auth/client'

import * as S from './styles'

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <S.Container
      type="button"
      onClick={() => signOut()}
    >
      <FaGithub color='#04D361' />
      {session.user.name}
      <FiX color='#737380' />
    </S.Container>
  ) : (
    <S.Container
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color='#eba417' />
       Sign in with Github
    </S.Container>
  )
}