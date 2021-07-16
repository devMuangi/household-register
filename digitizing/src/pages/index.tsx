import Head from 'next/head'
import Image from 'next/image'
import prisma from '../../lib/prisma';
import { GetServerSideProps } from 'next'
import styles from '../../styles/Home.module.css'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const chus = await prisma.chu.findMany({
    select: {
        id:true,
        name:true,
        code:true,
        county:true,     
   
      },
  })
  return {
    props: { chus},
  }
}

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Household register kit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          CHUS
        </h1>


        <div className={styles.grid}>
        {props.chus.map((item) => (
              <>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{item.name}</h2>
            <p>{item.county} county </p>
          </a>
                
              </>
            ))}
 
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
