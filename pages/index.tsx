import type { NextPage } from 'next'
import { DashboardContainer } from 'containers/Dashboard'
import HeaderContainer from 'containers/Header'

const Home: NextPage = () => {
  return (
    <>
    <HeaderContainer />
    <DashboardContainer />
    </>
  )
}

export default Home
