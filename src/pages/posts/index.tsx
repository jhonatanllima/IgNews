import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import * as S from './styles'

import { GetStaticProps } from 'next'
import { getPrismicCLient } from '../../services/prismic'

import {
  SEO
} from '../../components/index'

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <S.Container>
      <SEO
        title="Posts | ignews"
        description="Página destinada à publicação de todos os Posts"
      />

      <S.Main>
        <div>
          {posts.map(post => (
            <a href="#" key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </S.Main>
    </S.Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicCLient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text || '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-Br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return {
    props: {
      posts,
    }
  }
}