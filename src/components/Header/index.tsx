import Link from 'next/link'

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
          <Link href="/">
            <a className="isActive">Home</a>
          </Link>

          <Link href="/posts" prefetch>
            <a >Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </S.Container>
  )
}