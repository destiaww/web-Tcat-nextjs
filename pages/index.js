import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Event from '../components/Event'
import loginpage from '../components/loginpage'



export default function Home() {
  return (
    <div className='bg-gray-900 w-full'>
      <Head>
        <title>Tcat  |  Ticketing</title>
        <meta name="description" content="book ur ticket now" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About/>
    <Event />
    </div>
  ) 
}
