import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezra Rubio : Developer</title>
        <meta name="description" content="Ezra's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p>...which is still in progress, check back again soon.</p>
      </main>
    </div>
  );
}
