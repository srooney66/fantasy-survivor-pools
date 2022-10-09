import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>Top Way To Play Fantasy Football Survivor Pools</title>
        <meta name="description" content="Next generation fantasy football survivor eliminator pool app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Coming Soon...</p>
        <h1 className={styles.title}>
          The Next Gen Of Fantasy Football Survivor Pools
        </h1>
        <div>
          <form id="email-form">
            <div>
              <label for="email">Sign up for launch alerts: </label>
              <input id="email-input" value={email} type="text" placeholder="enter email here..."/>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://RooneyIT.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered and creted by RooneyIT Solutions, LLC
        </a>
      </footer>
    </div>
  )
}
