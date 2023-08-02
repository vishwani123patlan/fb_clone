import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import { getSession } from 'next-auth/react'
const inter = Inter({ subsets: ['latin'] })
import Login from '@/components/Login'
import Widgets from '@/components/Widgets'
export default function Home({session}) {
  if (!session) return(<Login />)

  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>

      {/* Header */}
      <Header />


      <main className="flex justify-between fixed w-full bg-gray-100">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        {/* Feed */}
        <div>
          <Feed />
        </div>
        {/* Widgets */}
        <div>
          <Widgets />
        </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
  //Get the user
  const session = await getSession(context);
  return {
    props: {
      session 
    }
  }
}
