import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllProjects } from '@/lib/articles'


function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="li">
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={`/projects/${article.slug}`}>{article.title}</Card.Link>
      </h2>
      {/* <Card.Description>{article.description}</Card.Description> */}
      <Card.Link
        href={`/projects/${article.slug}`}
        className="relative z-10 mt-6 flex items-center text-sm font-medium transition text-teal-500 group-hover:text-teal-500 dark:text-zinc-200"
      >
        {/* <ArrowIcon className="h-4 w-4 mr-2 flex-shrink-0" /> */}
        <span>View Detail</span>
      </Card.Link>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Naoto - Developer & Creator',
  description:
    'I enjoy personal development and have built many apps. I would like to introduce some of them.',
}

export default async function Home() {
  let articles = await getAllProjects()

  return (
    <SimpleLayout
      title="👋 Hello, I'm Naoto"
      intro="I enjoy personal development and have built many apps. I would like to introduce some of them."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </ul>
    </SimpleLayout>
  )
}