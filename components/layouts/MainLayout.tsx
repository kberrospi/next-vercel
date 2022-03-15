import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainModule.module.css'

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
