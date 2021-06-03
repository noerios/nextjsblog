import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Testing out NextJS by building out a component-based blog.</p>
        <p>
          (The content is pulled from my trip around the globe with Remote Year for Ayzenberg Group. For the full story,{' '}
          <a href="https://noe-rios.squarespace.com/blog/">Click Here</a>.)
        </p>
        <p>First Post:{' '}
          <Link href="/posts/first-post"><a>Kuala Lumpur</a></Link>.
        </p>
      </section>
    </Layout>
  )
}