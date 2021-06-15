import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className="home-block">
          <div className="home-text">
            <p>Testing out NextJS by building out a component-based blog.</p>
            <p>
              (The content is pulled from my trip around the globe with Remote Year for Ayzenberg Group. For the full story,{' '}
              <a href="https://noe-rios.squarespace.com/blog/">Click Here</a>.)
            </p>
          </div>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="blog-list">

          <h2 className={utilStyles.headingLg}>Blog</h2>
          <div className="post-section">
            <ul className= {utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}