import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Old Games</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Old Games Collection</Link>
        </h1>
        <span className='h5 float-right'>-By Krushna</span>
        <div className={styles.grid}>
          <Link href="./tictactoe">
          <a className={styles.card}>
            <h2>Tic Tac Toe &rarr;</h2>
            <p>Click here to play Tictac toe.</p>
          </a>
          </Link>
          <Link href="./flames">
          <a className={styles.card}>
            <h2>Flames &rarr;</h2>
            <p>Click here to play Flames.</p>
          </a>
          </Link>
          <Link href="./snake">
          <a className={styles.card}>
            <h2>Snake &rarr;</h2>
            <p>Click here to play Snake.</p>
          </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
