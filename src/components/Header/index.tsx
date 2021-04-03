import * as S from './styles'

import {
  SignInButton
} from '../index'

export function Header() {
  return (
    <S.Container>
      <div>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a href="#" className="isActive">Home</a>
          <a href="#">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </S.Container>
  )
}