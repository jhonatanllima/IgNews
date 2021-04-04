import * as S from '../styles/pages/index'

export default function Home() {
  return (
    <S.Container>
      <section>
        <span>👏 Hey, welcome! </span>
        <h1>News about <br /> the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
      </section>

      <img src="/images/avatar.svg" alt="Girl Coding" />
    </S.Container>
  )
}
