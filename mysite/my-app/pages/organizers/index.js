import Head from 'next/head'
import Navbar_Org from '../../components/Navbar_Org'
import Banner_Org from '../../components/Banner_Org'

export default function Home() {
  return (
    <div className='relative bg-black'>
      <Head>
        <title>EventJam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar_Org />
      <Banner_Org />
      

      
    </div>
  )
}