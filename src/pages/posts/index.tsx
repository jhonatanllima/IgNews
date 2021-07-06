import * as S from './styles'

import {
  SEO
} from '../../components/index'

export default function Posts() {
  return (
    <S.Container>
      <SEO
        title="Posts | ignews"
        description="Página destinada à publicação de todos os Posts"
      />

      <S.Main>
        <div>
          <a href="#">
            <time>16 de novembro de 2021</time>
            <strong>Aniversário do cara mais legal do mundo</strong>
            <p>
              esse cara é maneiro, porém precisa ter mais foco. Tendo mais foco ele se diverte estudando
              e fica muito bom naquilo que está fazendo. Ficando muito bom naquilo que está fazendo
              ele vai ter muito mais chances de ir pra Portugal.
            </p>
          </a>

          <a href="#">
            <time>16 de novembro de 2021</time>
            <strong>Aniversário do cara mais legal do mundo</strong>
            <p>
              esse cara é maneiro, porém precisa ter mais foco. Tendo mais foco ele se diverte estudando
              e fica muito bom naquilo que está fazendo. Ficando muito bom naquilo que está fazendo
              ele vai ter muito mais chances de ir pra Portugal.
            </p>
          </a>

          <a href="#">
            <time>16 de novembro de 2021</time>
            <strong>Aniversário do cara mais legal do mundo</strong>
            <p>
              esse cara é maneiro, porém precisa ter mais foco. Tendo mais foco ele se diverte estudando
              e fica muito bom naquilo que está fazendo. Ficando muito bom naquilo que está fazendo
              ele vai ter muito mais chances de ir pra Portugal.
            </p>
          </a>
        </div>
      </S.Main>
    </S.Container>
  )
}