import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardContainer } from 'containers/Dashboard'


const Home: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <title>Striveboxx</title>
        <meta name="description" content="A simple way to manage your expenses without linking your banking account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <DashboardContainer />
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          Los
        </span>
      </a>
      </footer>
    </>
  )
}

export default Home
