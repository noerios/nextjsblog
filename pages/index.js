import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Container from '../components/container'
import Intro from '../components/intro'
import HeroPost from '../components/hero-post'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'



export default function Home({ allPostsData }) {
  const heroPost = allPostsData[0]
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              />
          )}
        </Container>
        
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
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}