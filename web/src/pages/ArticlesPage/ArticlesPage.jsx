//import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

const ArticlesPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Articles" description="Articles page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlesPage
