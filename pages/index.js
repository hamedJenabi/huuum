import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HUUUM</title>
        <meta name="description" content="We are Huuum!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>HUUUM </h1>
        <h1 className={styles.title}>X.Y.Z. </h1>
        <h1 className={styles.persianTitle}>
          نه که خیلی خفنیم... گفتیم یه وبسایت درست کنیم
        </h1>
        <h1 className={styles.title}>More info coming soon!</h1>
      </main>
    </div>
  );
}
