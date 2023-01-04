import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardContainer } from 'containers/Dashboard'


const Home: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <title>App Title</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <DashboardContainer />
    <footer>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by{' '}
        <span>
          
        </span>
      </a>
      </footer>
    </>
  )
}

export default Home
