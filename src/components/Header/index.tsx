import * as S from './styles'

import {
  ActiveLink,
  SignInButton
} from '../index'

export function Header() {


  return (
    <S.Container>
      <div>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <ActiveLink activeClassName="isActive" href="/">
            <a> Home</a>
          </ActiveLink>

          <ActiveLink activeClassName="isActive" href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </S.Container>
  )
}