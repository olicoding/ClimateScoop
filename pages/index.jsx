import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Exciting new project coming soon! Stay tuned." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon!</h1>
        <p className={styles.description}>New project under construction.</p>
      </main>
    </div>
  );
}
