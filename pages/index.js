import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Interview Tasks</title>
      </Head>
      <main>
        <nav className='h-20 bg-slate-900 py-5 flex items-center'>
          <div className='container mx-auto'>
            <Link href="/products" className='px-10 py-3 border border-opacity-10 text-white'>Products</Link>
          </div>
        </nav>
      </main>
    </>
  )
}
