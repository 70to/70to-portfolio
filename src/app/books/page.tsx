import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Books I\'ve Read',
  description: 'A list of technical books I\'ve read displayed in table format',
}

interface Book {
  title: string
  description: string
}

const books: Book[] = [
  {
    title: 'プロになるためのweb技術入門',
    description: 'Webの仕組みやログインの仕組み、セキュリティなど、ウェブエンジニアとして学ぶべきスキルがとても分かりやすく書かれています。エンジニアになり始めたとき読んでおけばと後悔しています（笑）'
  },
  {
    title: 'Web API: The Good Parts',
    description: 'WebAPIの設計を学ぶことができます。APIの仕様書を書いたりする時にも役立ちます。'
  },
  {
    title: 'リーダブルコード',
    description: 'プログラマーの中で最も有名で人気な本ではないかと思います。きれいなコードや保守しやすいコードを書くのに役立ちます。'
  },
  {
    title: 'キタミ式イラストIT塾 基本情報技術者',
    description: '2進数、CPUの仕組み、ネットワーク、データベース、セキュリティなどエンジニアとして必要な基礎知識が網羅されています。こういった内容は流行に流されず陳腐化しないので学んで損はなく、むしろ新しい技術はこれらの基本的な技術を土台としていることがほとんどなのでとても重要と考えています。'
  },
  {
    title: '６ステップでマスターする　「最新標準」HTML CSSデザイン（固定レイアウト版）',
    description: 'HTMLとCSSを学習するために購入しました。'
  },
  {
    title: 'Web制作の現場で使う jQueryデザイン入門',
    description: ''
  },
  {
    title: 'WordPress 仕事の現場でサッと使える！デザイン教科書',
    description: '最低限の仕事ができるくらいの内容が書かれています。'
  },
  {
    title: '気づけばプロ並みPHP 改訂版－－ゼロから作れる人になる！',
    description: '私がプログラミングを始めた時にかなりお世話になった本です。'
  },
  {
    title: '独習PHP 第3版',
    description: 'PHPの基本的なことが網羅されている本です。説明も分かりやすいです。'
  },
  {
    title: 'エンジニアの知的生産術',
    description: '効率的に学ぶ方法や、やる気を出す方法などエンジニア向けに書かれた自己啓発書です。'
  },
  {
    title: 'プリンシプル オブ プログラミング 3年目までに身につけたい 一生役立つ101の原理原則',
    description: '基本的な原則「KISS」「DRY」からあまり聞いたことがない原則までプログラミングで役立つさまざまな原則がまとめられています。'
  }
]

export default function Books() {
  return (
    <SimpleLayout
      title="Books I've Read"
      intro="A list of technical books I've read."
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">
                Book Title
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">
                Description & Review
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">
                  {book.title}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                  {book.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SimpleLayout>
  )
}