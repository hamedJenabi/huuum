import Head from "next/head";
import Link from "next/link";
import styles from "./media.module.scss";

export default function bio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HUUUM</title>
        <meta name="description" content="We are Huuum!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Lato&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <p className={styles.websiteTitle}>HUUUM</p>
        </Link>
        <div className={styles.bio}>
          <p className={styles.details}>COMING SOON</p>
        </div>
        <div className={styles.titleWrapper}>
          <Link href="/">
            <p className={styles.title}>Home</p>
          </Link>
          <Link href="/bio">
            <p className={styles.title}>Bio</p>
          </Link>
          <Link href="mailto:Odarvishi@hotmail.com">
            <p className={styles.title}>Contact</p>
          </Link>
          {/* <p className={styles.title}>Concerts</p> */}
          {/* <p className={styles.title}>Contact</p> */}
        </div>
      </main>
    </div>
  );
}
