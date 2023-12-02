import { compileMDX } from 'next-mdx-remote/rsc'

export default async function Home() {
  const { content } = await compileMDX({
    source: '![devjiwonchoi logo](/devjiwonchoi.png)',
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {content}
    </main>
  )
}
